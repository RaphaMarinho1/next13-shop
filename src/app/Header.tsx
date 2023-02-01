import React from "react";
import logoImg from "src/assets/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 px-0 w-full max-w-[1100px] my-0 mx-auto">
      <Image src={logoImg} alt="Ignite Shop Logo" />
    </header>
  );
};

export default Header;
