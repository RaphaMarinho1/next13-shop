import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: any;
  searchParams: {
    session_id: string;
  };
}

const fetchOrderData = async (session_id: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    },
  };

  const session = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${session_id}?expand[]=line_items.data.price.product`,
    options
  ).then((response) => response.json());

  const custumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product;

  return {
    custumerName,
    product: {
      name: product.name,
      image: product.images[0],
    },
  };
};

const page = async ({ searchParams: { session_id } }: PageProps) => {
  if (!session_id) {
    notFound();
  }

  const { custumerName, product } = await fetchOrderData(session_id);

  return (
    <main className="flex flex-col items-center justify-center my-0 mx-auto h-[656px]">
      <h1 className="text-4xl text-gray-100">Compra efetuada</h1>
      <div className="w-full max-w-[130px] h-[145px] bg-product-gradient p-1 flex items-center justify-center mt-16 mb-8 [&>img]:object-cover">
        <Image
          alt={product.name}
          src={product.image}
          width={120}
          height={110}
        />
      </div>
      <p className="text-3xl max-w-[560px] text-center leading-8">
        <strong>{custumerName}</strong>, sua <strong>Camiseta</strong> já está a
        caminho de sua casa.
      </p>

      <Link
        href={"/"}
        className="mt-[5rem] block text-2xl font-bold text-green-500 hover:text-green-300"
      >
        Voltar ao catálogo
      </Link>
    </main>
  );
};

export default page;
