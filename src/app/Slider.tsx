"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Props {
  children: React.ReactNode[];
}

const Slider = ({ children }: Props) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider flex ml-auto w-full max-w-[calc(100%-((100%-1180px)/2))] min-h-[656px]"
    >
      {children}
    </div>
  );
};

export default Slider;
