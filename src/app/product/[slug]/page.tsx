import Image from "next/image";
import { Stripe } from "stripe";
import BuyButton from "./BuyButton";

async function getProductData(productId: string) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 1, // 2 hours
    },
  };

  const product: Stripe.Product = await fetch(
    `https://api.stripe.com/v1/products/${productId}?expand[]=default_price`,
    options
  ).then((response) => response.json());

  const price = product.default_price as Stripe.Price;

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    imagesUrl: product.images,
    price: new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    defaultPriceId: price.id,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { price, imagesUrl, name, description, defaultPriceId } =
    await getProductData(params.slug);

  return (
    <main className=" grid grid-cols-2 items-stretch gap-16 max-w-[1180px] my-0 mx-auto">
      <div className="w-full max-w-xl h-[656px] bg-product-gradient rounded-lg p-1 flex justify-center">
        <Image
          src={imagesUrl[0]}
          alt={name}
          width={520}
          height={480}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-300">{name}</h1>
        <span className="mt-4 block text-4xl text-green-300">{price}</span>

        <p className="mt-10 text-xl leading-[28.8px] text-gray-300">
          {description}
        </p>

        <BuyButton priceId={defaultPriceId} />
      </div>
    </main>
  );
}
