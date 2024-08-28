import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "آکادمی آموزش برنامه نویسی سبزلرن",
  description:
    "با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={"bg-whiteColor text-blackColor"}>
        <Header />
        <div className="max-w-[1100px] mx-auto p-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
