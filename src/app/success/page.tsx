//TODO: bring product infos here
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center my-0 mx-auto h-[656px]">
      <h1 className="text-4xl text-gray-100">Compra efetuada</h1>
      <div className="w-full max-w-[130px] h-[145px] bg-product-gradient p-1 flex items-center justify-center mt-16 mb-8 [&>img]:object-cover">
        {/* <Image /> */}
      </div>
      <p className="text-3xl max-w-[560px] text-center leading-8">
        <strong>Raphael Marinho</strong>, sua <strong>Camiseta</strong> já está
        a caminho de sua casa.
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
