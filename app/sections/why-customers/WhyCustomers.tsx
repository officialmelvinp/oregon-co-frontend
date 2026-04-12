"use client"

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
  return (
    <section className="py-14 md:py-20 bg-[#f7f4ef] text-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 px-4">
          <p className="text-[13px] tracking-[0.35em] uppercase font-bold text-black flex items-center justify-center gap-2">
            WHY CUSTOMERS <span className="text-red-500">♥</span> OREGON CO.
          </p>
        </div>

        {/* ── MOBILE: CSS infinite marquee, never pauses ── */}
        <div className="md:hidden overflow-hidden">
          <style>{`
            @keyframes marquee-mobile {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-mobile {
              display: flex;
              width: max-content;
              animation: marquee-mobile 18s linear infinite;
            }
          `}</style>

          <div className="marquee-mobile">
            {/* Duplicate for seamless loop */}
            {[...reasons, ...reasons].map((r, idx) => (
              <div key={idx} className="px-8 py-2" style={{ minWidth: "80vw" }}>
                <h3 className={`${playfair.className} text-[2rem] font-normal text-black mb-3 leading-tight`}>
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: original auto-scrolling ticker ── */}
        <div className="hidden md:block px-6">
          <DesktopSlider />
        </div>

      </div>
    </section>
  )
}

function DesktopSlider() {
  const Slider = require("react-slick").default

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  }

  return (
    <Slider {...settings}>
      {reasons.map((r, idx) => (
        <div key={idx} className="px-8">
          <h3 className={`${playfair.className} text-3xl font-normal text-black mb-3`}>
            {r.title}
          </h3>
          <p className="text-base text-gray-500 leading-relaxed max-w-xs">
            {r.desc}
          </p>
        </div>
      ))}
    </Slider>
  )
}