"use client";

import React, { useState } from "react";
import axios from "axios";

interface Props {
  priceId: string;
}

function BuyButton({ priceId }: Props) {
  const [isCreatingSection, setIsCreatingSection] = useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingSection(true);

      const response = await axios.post("/api/checkout", {
        priceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingSection(false);
      throw new Error("Falha ao redirecionar para o checkout");
    }
  }

  return (
    <button
      disabled={isCreatingSection}
      onClick={handleBuyProduct}
      className="mt-auto bg-green-500 border-0 text-white rounded-none p-5 cursor-pointer font-bold text-xl 
      disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:bg-green-300"
    >
      Comprar agora
    </button>
  );
}

export default BuyButton;
