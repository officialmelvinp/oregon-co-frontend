"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const gifts = [
  {
    img: "/gifts/graduation.jpg",
    alt: "Graduation Gifts",
    label: "Shop Graduation Gifts",
  },
  {
    img: "/gifts/mothers-day.jpg",
    alt: "Mother's Day Gifts",
    label: "Shop Mother's Day Gifts",
  },
  {
    img: "/gifts/easter.jpg",
    alt: "Easter Gifts",
    label: "Shop Easter Gifts",
  },
]

export default function SpringGiftGame() {
  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* Header — centered */}
        <div className="text-center mb-8">
          <h2 className={`${playfair.className} text-2xl md:text-4xl font-normal text-black`}>
            Win the Spring Gifting Game
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Our fine jewelry gifts are high quality and made to last no matter the price.
          </p>
        </div>

        {/* ── DESKTOP: 3 columns ── */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {gifts.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {}}
              className="cursor-pointer group"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-3 text-sm underline underline-offset-4 text-black hover:text-[#b99155] transition-colors cursor-pointer">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── MOBILE: native horizontal scroll, 2 cards visible ── */}
        <div className="md:hidden">
          <div
            className="flex gap-3 overflow-x-auto pb-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {gifts.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {}}
                className="flex-none cursor-pointer"
                style={{ width: "calc(50% - 6px)", scrollSnapAlign: "start" }}
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-sm underline underline-offset-4 text-black">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}