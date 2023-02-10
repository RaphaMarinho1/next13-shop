import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { Roboto } from "@next/font/google";
import Product from "./components/Product";

import Slider from "./components//Slider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export interface ProductsResponse {
  id: string;
  name: string;
  imagesUrl: string[];
  price: number;
}

async function getProductsData() {
  const res = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products: ProductsResponse[] = res.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imagesUrl: product.images,
      price: price?.unit_amount ? price.unit_amount / 100 : 0,
    };
  });

  return products;
}

export default async function Home() {
  const products = await getProductsData();

  return (
    <main className={`${roboto.className} `}>
      <Slider>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Slider>
    </main>
  );
}
