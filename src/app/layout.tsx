import { Roboto } from "@next/font/google";

import "./globals.css";
import Header from "./components//Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-900 text-gray-300">
        <div className="flex flex-col items-start min-h-screen justify-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
