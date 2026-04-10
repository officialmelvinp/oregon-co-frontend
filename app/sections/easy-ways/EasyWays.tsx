"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function EasyWays() {
  const options = [
    "Order Online, Pick Up In Store",
    "Get it Today with Same Day Delivery",
    "Chat Now with a Friendly Jewelry Expert",
    "Visit Us In Store — No Appointment Necessary",
  ]

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/easyways/in-store.jpg"
            alt="Consultation at Oregon Co"
            width={600}
            height={480}
            className="rounded-lg shadow-md object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 italic">
            <span className="text-gold">Easy Ways </span>to Shop Oregon Co
          </h2>
          <p className="text-gray-700 mb-6">
            However you like to shop, we’ve got you covered.
          </p>
          <ul className="space-y-3">
            {options.map((opt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span className="text-sm text-gray-800">{opt}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
