"use client"

import Slider from "react-slick"
import { motion } from "framer-motion"

const reasons = [
  {
    title: "Commitment to Quality",
    desc: "Expertly crafted jewelry, built to last with uncompromising standards.",
  },
  {
    title: "A Legacy of Integrity",
    desc: "Family‑owned, values‑driven, and always doing what’s right.",
  },
  {
    title: "Endless Options",
    desc: "Exclusive designs and endless custom choices for every style and story.",
  },
]

export default function WhyCustomers() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-gold text-sm tracking-[5px] mb-8 uppercase">
          Why Customers ❤️ Oregon Co
        </h2>

        <Slider {...settings}>
          {reasons.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-6"
            >
              <div className="border border-gold/40 bg-graydark p-10 rounded-lg mx-3 hover:border-gold transition-colors">
                <h3 className="text-2xl font-serif text-gold mb-3">{r.title}</h3>
                <p className="text-offwhite text-sm font-light leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
