"use client"

import { useState } from "react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export default function EmailSignup() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-[#edeae4] py-8 md:py-10 text-black">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

        {/* Left — text */}
        <div className="text-center md:text-left">
          <h3 className={`${playfair.className} text-2xl md:text-3xl font-normal text-black`}>
            Sign Up for Email
          </h3>
          <p className="mt-1 text-sm text-gray-600 font-normal tracking-normal">
            Get special offers, fashion tips, and more!
          </p>
        </div>

        {/* Right — input + button */}
<div className="flex w-full md:w-auto gap-0 px-4 md:px-0">
  <input
    type="email"
    placeholder="Enter Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="flex-1 md:w-[320px] px-3 py-2.5 text-sm font-normal border border-gray-300 outline-none focus:border-black transition-colors bg-white"
  />
  <button
    onClick={() => {}}
    className="px-4 py-2.5 bg-gray-700 text-white text-sm font-normal tracking-[0.1em] hover:bg-black transition-colors whitespace-nowrap"
  >
    SUBMIT
  </button>
</div>

      </div>
    </section>
  )
}