import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./sections/footer/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Oregon Co | Jewelry Redefined",
  description: "Your friend and jeweler – crafted in black and gold elegance.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} overflow-x-hidden`}>
      <body className="bg-offwhite text-black overflow-x-hidden">
        <Header />
        <main className="pt-[90px]">{children}</main>
        <Footer />

    {/* Floating sidebar — Feedback + Email */}
<div className="fixed right-0 top-[35%] z-50 flex flex-col gap-[60px]">
  
  {/* Feedback — circle button with speech bubble icon */}
  <div className="bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer rounded-full w-11 h-11 flex items-center justify-center shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  </div>

  {/* Email — circle button with envelope icon */}
  <div className="bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer rounded-full w-11 h-11 flex items-center justify-center shadow-md">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
    </svg>
  </div>

</div>
      </body>
    </html>
  );
}
