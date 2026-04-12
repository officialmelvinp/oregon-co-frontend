"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export default function FinancingBanner() {
  return (
    <section className="bg-gradient-to-b from-[#e8dcc8] to-[#f2ece0] py-14 md:py-20 text-black">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Card image — clickable */}
        <div
          onClick={() => {}}
          className="cursor-pointer w-full max-w-[320px] md:max-w-[380px] mb-8"
        >
          <Image
            src="/financing/creditcard.png"
            alt="Oregon Co Credit Card"
            width={380}
            height={240}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Headline */}
        <h2 className={`${playfair.className} text-3xl md:text-4xl font-normal text-black leading-snug`}>
          <em className="font-semibold">Limited-Time</em> 18-Month
          <br />Special Financing †
        </h2>

        {/* Body */}
        <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
          Enjoy convenient monthly payments and exclusive special financing
          with the new Oregon Co Credit Card powered by Synchrony Bank.
        </p>

        {/* CTA */}
        <button
          onClick={() => {}}
          className="mt-6 text-sm md:text-base text-black underline underline-offset-4 hover:text-[#b99155] transition-colors"
        >
          Explore the Details
        </button>

      </div>
    </section>
  )
}