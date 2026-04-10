import "./globals.css"
import { Poppins, Playfair_Display } from "next/font/google"
import Header from "./components/header/Header"
import Footer from "./sections/footer/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata = {
  title: "Oregon Co | Jewelry Redefined",
  description: "Your friend and jeweler – crafted in black and gold elegance.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className} overflow-x-hidden`}>
      <body className="bg-offwhite text-black overflow-x-hidden">
        <Header />
    <main className="pt-[90px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}