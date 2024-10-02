import "./globals.css";
import type { Metadata } from "next";
import Menu from "@/components/menu/Menu";
import OutlinedImages from "@/components/OutlinedImages";

export const metadata: Metadata = {
  title: "Rino Bellandi",
  description: "Rino Bellandi",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  console.log(params);
  return (
    <html lang="en">
      <body className={`bg-black text-white antialiased`}>
        <Menu />

        <OutlinedImages />

        <div className="bg-transparent">{children}</div>
      </body>
    </html>
  );
}
