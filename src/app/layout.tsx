import "./globals.css";
import Header from "./components//Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-900">
        <div className="flex flex-col items-start min-h-screen justify-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
