"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Playfair_Display } from "next/font/google"
import { FaPlus, FaTimes } from "react-icons/fa"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const INFO_ITEMS = [
  {
    id: "family",
    label: "LIKE FAMILY",
    title: "Like Family",
    desc: "We treat every customer like a friend — offering honest advice, no pressure, and a personal experience you won't find anywhere else.",
    video: "/diamonds/family.mp4",
  },
  {
    id: "source",
    label: "AT THE SOURCE",
    title: "At the Source",
    desc: "We work with our diamond partners directly at the source and negotiate on our customers' behalf, so you can trust you're getting the best price possible.",
    video: "/diamonds/source.mp4",
  },
  {
    id: "selected",
    label: "HAND-SELECTED",
    title: "Hand-Selected",
    desc: "We hand-pick each diamond up close in person, using a jeweler's loupe under 10x magnification, never off a database or sight unseen.",
    video: "/diamonds/selected.mp4",
  },
]

export default function DiamondsBanner() {
  const [open, setOpen] = useState<string | null>(null)
  const current = INFO_ITEMS.find((i) => i.id === open)

  return (
    <section className="relative w-full overflow-hidden">

      {/* ── Background image ── */}
      <div className="relative w-full h-[420px] md:h-[500px]">
        <Image
          src="/diamonds/diamonds-bg.jpg"
          alt="Diamonds background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ── CONTENT LAYER ── */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-16 py-10 md:py-14">

          {/* Headline + CTA — top left */}
          <div className="max-w-sm md:max-w-md">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-normal text-white leading-snug`}>
              The most <em className="font-semibold not-italic">beautiful</em> natural
              and lab-grown diamonds in every grade.
            </h2>
            <button
              onClick={() => {}}
              className="mt-4 text-white text-sm underline underline-offset-4 hover:text-[#f5dfa0] transition-colors"
            >
              Shop Diamonds
            </button>
          </div>

          {/* Info buttons row — bottom */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">

            {/* LIKE FAMILY — left */}
            <InfoButton item={INFO_ITEMS[0]} onClick={() => setOpen("family")} align="left" />

            {/* AT THE SOURCE — right */}
            <div className="flex flex-col gap-6 md:items-end">
              <InfoButton item={INFO_ITEMS[1]} onClick={() => setOpen("source")} align="right" />
              <InfoButton item={INFO_ITEMS[2]} onClick={() => setOpen("selected")} align="right" />
            </div>

          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="bg-white w-full max-w-[800px] flex flex-col md:flex-row overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaTimes className="text-sm text-gray-600" />
              </button>

              {/* Left — text */}
              <div className="flex-1 bg-[#f7f4ef] flex flex-col justify-center px-8 md:px-12 py-12 md:py-16">
                <h3 className={`${playfair.className} text-3xl md:text-4xl font-normal text-black mb-4`}>
                  {current.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
                  {current.desc}
                </p>
              </div>

              {/* Right — video */}
              <div className="flex-1 min-h-[240px] md:min-h-[360px] relative bg-black">
                <video
                  src={current.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

// Info button — works for both left and right alignment
function InfoButton({
  item,
  onClick,
  align,
}: {
  item: typeof INFO_ITEMS[0]
  onClick: () => void
  align: "left" | "right"
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-3 text-white hover:text-[#f5dfa0] transition-colors group ${align === "right" ? "flex-row-reverse self-end md:self-auto" : ""}`}
      whileHover={{ scale: 1.03 }}
    >
      <span className="text-[11px] tracking-[0.2em] font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {item.label}
      </span>
      <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-white/60 group-hover:border-[#f5dfa0]/80 transition-colors"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
          <FaPlus className="text-white text-[10px]" />
        </div>
      </div>
    </motion.button>
  )
}