import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ProductsResponse } from "../page";

const Product = ({ name, price, imagesUrl, id }: ProductsResponse) => {
  return (
    <Link
      href={`/product/${id}`}
      className="group keen-slider__slide bg-product-gradient rounded-lg 
      relative flex items-center justify-center overflow-hidden"
      prefetch={false}
    >
      <Image
        src={imagesUrl[0]}
        width={520}
        height={480}
        alt={name}
        className="object-cover"
      />
      <footer
        className="absolute bottom-1 left-1 right-1 rounded-md flex items-center
        justify-between bg-black/60 p-8 font-bold translate-y-[110%] opacity-0 transition-all ease-in-out
        group-hover:translate-y-0 group-hover:opacity-100"
      >
        <strong className="text-2xl text-gray-100">{name}</strong>
        <span className="text-3xl text-green-300">{price}</span>
      </footer>
    </Link>
  );
};

export default Product;
