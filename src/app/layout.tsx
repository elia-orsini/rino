import "./globals.css";
import type { Metadata } from "next";
import Menu from "@/components/menu/Menu";
import OutlinedImages from "@/components/OutlinedImages";
import Canvas3D from "@/components/3D/Canvas3D";

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
  return (
    <html lang="en">
      <body className={`bg-black text-white antialiased`}>
        <Menu />

        <OutlinedImages />

        <div className="absolute z-0 h-screen w-screen">
          <Canvas3D />
        </div>

        <div className="bg-transparent">{children}</div>
      </body>
    </html>
  );
}
