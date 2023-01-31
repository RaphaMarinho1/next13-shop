import { Roboto } from "@next/font/google";
import styles from "./page.module.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return <main className={roboto.className}>Hello Ignite Shop</main>;
}
