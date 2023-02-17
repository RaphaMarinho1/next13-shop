import Product from "./components/Product";

import { Stripe } from "stripe";

import Slider from "./components/Slider";

export interface ProductsResponse {
  id: string;
  name: string;
  imagesUrl: string[];
  price: string;
}

async function getProductsData() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 2, // 2 hours
    },
  };

  const products: Stripe.Product[] = await fetch(
    "https://api.stripe.com/v1/products?expand[]=data.default_price",
    options
  )
    .then((response) => response.json())
    .then(({ data }) => data);

  return products.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imagesUrl: product.images,
      price: new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    };
  });
}

export default async function Home() {
  const products = await getProductsData();

  return (
    <main>
      <Slider>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Slider>
    </main>
  );
}
