import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <p className="text-3xl font-bold underline">Hello world</p>
    </main>
  );
}
