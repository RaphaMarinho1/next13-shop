import { Roboto } from "@next/font/google";
import Product from "./Product";

import Slider from "./Slider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={`${roboto.className} `}>
      <Slider>
        <Product />
        <Product />
        <Product />
        <Product />
      </Slider>
    </main>
  );
}
