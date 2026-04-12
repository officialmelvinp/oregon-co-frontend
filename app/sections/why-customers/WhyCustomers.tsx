"use client"

import { useRef } from "react"
import Slider from "react-slick"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const reasons = [
  {
    title: "Worldwide Sourcing",
    desc: "We go straight to the source for the world's finest stones — no middleman, better value.",
  },
  {
    title: "Commitment to Quality",
    desc: "Expertly crafted jewelry, built to last with uncompromising standards.",
  },
  {
    title: "A Legacy of Integrity",
    desc: "Family-owned, values-driven, and always doing what's right.",
  },
  {
    title: "Endless Options",
    desc: "Exclusive designs and endless custom choices for every style and story.",
  },
  {
    title: "A Personal Experience",
    desc: "Friendly, no-pressure guidance with benefits that build trust for life.",
  },
]

export default function WhyCustomers() {
  const sliderRef = useRef<any>(null)

  const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  cssEase: "linear",
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipe: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
  ],
}
  return (
    <section className="py-16 md:py-20 bg-[#f7f4ef] text-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
        <p className="text-[13px] tracking-[0.35em] uppercase font-bold text-black flex items-center justify-center gap-2">
  WHY CUSTOMERS <span className="text-red-500">♥</span> OREGON CO.
</p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {reasons.map((r, idx) => (
            <div key={idx} className="px-4 md:px-6">
              <div className="text-center md:text-left">
                <h3 className={`${playfair.className} text-2xl md:text-3xl font-normal text-black mb-3`}>
                  {r.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  )
}