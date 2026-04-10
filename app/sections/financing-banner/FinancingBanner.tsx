"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FinancingBanner() {
  return (
    <section className="bg-offwhite py-16 text-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Credit card or feature image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/financing/creditcard.jpg"
            alt="Oregon Co credit card"
            width={420}
            height={260}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-serif">
            <em className="text-gold">Limited‑Time</em>  18‑Month Special Financing †
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Enjoy convenient monthly payments and exclusive special financing
            with the new Oregon Co Credit Card — powered by Synchrony Bank.
          </p>
          <button className="bg-gold text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors">
            Explore the Details
          </button>
        </motion.div>
      </div>
    </section>
  )
}
