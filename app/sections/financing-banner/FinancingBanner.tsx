"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function FinancingBanner() {
  return (
    <section className="bg-gradient-to-b from-[#e8dcc8] to-[#f2ece0] py-10 md:py-12 text-black">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Card — compact, left */}
        <div onClick={() => {}} className="cursor-pointer flex-shrink-0">
          <Image
            src="/financing/creditcard.png"
            alt="Oregon Co Credit Card"
            width={220}
            height={140}
            className="rounded-xl shadow-lg w-[180px] md:w-[220px] h-auto"
          />
        </div>

        {/* Text — right */}
        <div className="text-center md:text-left">
          <h2
            className={`${playfair.className} text-2xl md:text-3xl font-normal text-black leading-snug`}
          >
            <em className="font-semibold">Limited-Time</em> 18-Month Special
            Financing †
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
            Enjoy convenient monthly payments and exclusive special financing
            with the new Oregon Co Credit Card, powered by Synchrony Bank.
          </p>
          <button
            onClick={() => {}}
            className="mt-4 text-sm md:text-base text-black font-medium underline underline-offset-4 hover:text-[#b99155] transition-colors"
          >
            Explore the Details
          </button>
        </div>
      </div>
    </section>
  );
}
