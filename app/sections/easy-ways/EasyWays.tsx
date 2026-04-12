"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const options = [
  { text: "Order Online, Pick Up In Store", link: false },
  { text: "Get it Today with Same Day Delivery", link: false },
  { text: "Chat Now", extra: "with a Friendly Jewelry Expert", link: true },
  { text: "Visit Us In Store", extra: ", No Appointment Necessary", link: true },
]

export default function EasyWays() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">

        {/* Image — full height, left half */}
        <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
          <Image
            src="/easyways/in-store.jpg"
            alt="Consultation at Oregon Co"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Text — right half */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-normal text-black leading-snug`}>
            <em className="font-semibold">Easy Ways</em> to<br />
            Shop Oregon Co.
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            However you like to shop, we've got you covered.
          </p>
          <ul className="mt-6 space-y-3">
            {options.map((opt, i) => (
              <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-800">
                <span className="text-black mt-0.5 text-xs">◆</span>
                <span>
                  {opt.link ? (
                    <>
                      <button
                        onClick={() => {}}
                        className="underline underline-offset-2 hover:text-[#b99155] transition-colors"
                      >
                        {opt.text}
                      </button>
                      {opt.extra}
                    </>
                  ) : (
                    opt.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}