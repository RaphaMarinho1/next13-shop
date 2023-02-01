import { Roboto } from "@next/font/google";
import Product from "./Product";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main
      className={`${roboto.className} flex gap-12 ml-auto w-full max-w-[calc(100%-((100%-1180px)/2))] min-h-[656px]`}
    >
      <Product />
      <Product />
    </main>
  );
}
