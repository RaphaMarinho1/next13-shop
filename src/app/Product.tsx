import React from "react";
import Link from "next/link";
import Image from "next/image";

import camiseta1 from "src/assets/camisetas/1.png";

const Product = () => {
  return (
    <Link
      href="#"
      className="group bg-gradient-to-b from-gradient-green to-gradient-purple rounded-lg p-1 relative flex items-center justify-center overflow-hidden"
    >
      <Image
        src={camiseta1}
        width={520}
        height={480}
        alt="camiseta 1"
        className="object-cover"
      />
      <footer
        className="absolute bottom-1 left-1 right-1 rounded-md flex items-center
        justify-between bg-black/60 p-8 font-bold translate-y-[110%] opacity-0 transition-all ease-in-out
        group-hover:translate-y-0 group-hover:opacity-100"
      >
        <strong className="text-2xl text-gray-100">Camiseta x</strong>
        <span className="text-3xl text-green-300">R$ 79.90</span>
      </footer>
    </Link>
  );
};

export default Product;
