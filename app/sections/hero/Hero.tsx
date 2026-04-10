"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

// ✅ Playfair font (same as header for consistency)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// ---------- INFO DATA ----------
const INFO_ITEMS = [
  {
    id: "ready",
    title: "Ready When You Are",
    desc: "Our in-house jewelers will bring your dream ring to life in days, not weeks, hand-setting your center stone and making sure every detail is just right.",
    video: "/classics/ready.mp4",
    pos: "left",
  },
  {
    id: "crafted",
    title: "Crafted to Last",
    desc: "We've been experts in craftsmanship since 1929, and your vision is brought to life with the highest quality standards that show in every detail.",
    video: "/classics/crafted.mp4",
    pos: "right-below",
  },
  {
    id: "warranty",
    title: "Free Lifetime Warranty",
    desc: "Your ring comes with our All-Inclusive Free Lifetime Warranty that covers everything and even protects your center stone.",
    video: "/classics/warranty.mp4",
    pos: "right",
  },
];

export default function Hero() {
  const [open, setOpen] = useState<string | null>(null);
  const current = INFO_ITEMS.find((i) => i.id === open);

  return (
    <section className="group relative h-auto md:h-[58vh] flex flex-col justify-center bg-gradient-to-b from-[#f2dfb6] via-[#f7ecd3] to-[#fcf8f3] text-black overflow-hidden py-8 md:py-0">
      {/* --- TITLE --- */}
      <div className="max-w-3xl mx-auto text-center -translate-y-10 md:-translate-y-8 px-4">
        <h1
          className={`${playfair.className} text-4xl md:text-[3.2rem] tracking-[0.05em] font-normal md:font-medium leading-tight md:leading-[1.2]`}
        >
          Create Now,
          <br className="md:hidden" />
          <span className="italic text-gold font-semibold">Love</span>
          <span className="hidden md:inline">&nbsp;</span>
          Forever
        </h1>
      </div>

      {/* --- MOBILE CENTER SECTION --- */}
      <div className="md:hidden flex flex-col items-center gap-4 mt-4 px-4">
        {/* CENTER PLUS BUTTON WITH TEXT */}
        <motion.button
          onClick={() => setOpen("crafted")}
          className="flex flex-col items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
        >
          {/* ADVANCED LUXURY BUTTON */}
          <motion.div
            className="relative w-12 h-12 flex items-center justify-center"
            whileHover={{ scale: 1.15 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold border-r-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-transparent"
              animate={{
                boxShadow: [
                  "0 0 10px 0px rgba(212, 175, 55, 0.4)",
                  "0 0 25px 5px rgba(212, 175, 55, 0.3)",
                  "0 0 10px 0px rgba(212, 175, 55, 0.4)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative w-10 h-10 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaPlus className="text-gold text-sm" />
            </motion.div>
            {[0, 120, 240].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-1.5 h-1.5 bg-gold rounded-full"
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 18,
                  y: Math.sin((angle * Math.PI) / 180) * 18,
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: angle / 180,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
          <span className="text-xs font-medium tracking-widest text-gray-800">
            CRAFTED TO LAST
          </span>
        </motion.button>
      </div>

      {/* --- RING + INFO BUTTONS --- */}
      <div className="relative flex flex-col items-center mt-2 md:mt-[-100px]">
        <motion.img
          src="/classics/hero-ring.jpg"
          alt="Rotating Ring"
          className="w-80 md:w-80 lg:w-[420px] xl:w-[460px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)] md:drop-shadow-[0_12px_25px_rgba(0,0,0,0.3)]"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ✨ SPARKLES */}
        <motion.div
          className="hidden md:block absolute top-[20%] left-[45%] w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.9)]"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1.6, 0.6],
          }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />

        <motion.div
          className="hidden md:block absolute top-[28%] left-[52%] w-[6px] h-[6px] bg-white rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-[28%] left-[52%] w-[6px] h-[6px] bg-white rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.8, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* glow */}
        <div className="hidden md:block absolute bottom-[4%] w-48 h-14 bg-gradient-to-b from-gold/40 to-transparent blur-2xl opacity-70"></div>

        {/* DESKTOP BUTTONS */}
        <InfoButton
          label="READY WHEN YOU ARE"
          onClick={() => setOpen("ready")}
          position="left"
        />

        <InfoButton
          label="FREE LIFETIME WARRANTY"
          onClick={() => setOpen("warranty")}
          position="right"
        />

        <InfoButton
          label="CRAFTED TO LAST"
          onClick={() => setOpen("crafted")}
          position="right-lower"
        />
      </div>

      {/* --- MOBILE BUTTONS BELOW RING --- */}
      <div className="md:hidden flex justify-center gap-12 px-4 mt-6 pb-4">
        {/* READY WHEN YOU ARE */}
        <motion.button
          onClick={() => setOpen("ready")}
          className="flex flex-col items-center gap-2 group -translate-y-4"
        >
          <motion.div
            className="relative w-10 h-10"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold border-r-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="relative w-9 h-9 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaPlus className="text-gold text-xs" />
            </motion.div>
          </motion.div>
          <span className="text-xs font-medium tracking-widest text-gray-800 text-center w-24">
            READY WHEN YOU ARE
          </span>
        </motion.button>

        {/* FREE LIFETIME WARRANTY */}
        <motion.button
          onClick={() => setOpen("warranty")}
          className="flex flex-col items-center gap-2 group translate-y-2"
        >
          <motion.div
            className="relative w-10 h-10"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold border-r-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="relative w-9 h-9 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaPlus className="text-gold text-xs" />
            </motion.div>
          </motion.div>
          <span className="text-xs font-medium tracking-widest text-gray-800 text-center w-24">
            FREE LIFETIME WARRANTY
          </span>
        </motion.button>
      </div>

      {/* --- CTA BUTTON --- */}
      <div className="w-full px-4 py-4 md:px-0 md:py-0 md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2 flex justify-center">
        <button
          className={`${playfair.className} w-full md:w-auto px-6 md:px-7 py-3 md:py-2.5 text-xs md:text-base tracking-[0.12em] text-black bg-white border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md`}
        >
          SHOP ENGAGEMENT RINGS
        </button>
      </div>

        {/* --- MODAL --- */}
      {current && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center md:justify-end z-50 px-4 md:px-0">
          <div className="bg-white w-full sm:max-w-sm md:w-[420px] h-auto md:h-full max-h-[90vh] md:max-h-none shadow-2xl p-6 overflow-y-auto relative rounded-xl md:rounded-none">
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 md:right-6 md:top-6 w-10 h-10 flex items-center justify-center group"
            >
              {/* glowing pulse */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />

              {/* rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-gold"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* X icon */}
              <FaTimes className="relative text-black group-hover:text-gold transition" />
            </button>

            <h2 className={`${playfair.className} text-xl md:text-3xl mt-12`}>
              {current.title}
            </h2>

            <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">
              {current.desc}
            </p>

            <video
              src={current.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full mt-6 rounded-lg shadow-md"
            />
          </div>
        </div>
      )}

      {/* shimmer sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl" />
      </motion.div>
    </section>
  );
}

// ---------- BUTTON ----------
function InfoButton({
  label,
  onClick,
  position,
}: {
  label: string;
  onClick: () => void;
  position: "left" | "right" | "right-lower";
}) {
  const base =
    "absolute flex items-center gap-3 text-[13px] md:text-[14px] font-medium tracking-[0.1em] cursor-pointer transition";

  const pos =
    position === "left"
      ? "left-[10%] top-[45%]"
      : position === "right"
        ? "right-[10%] top-[43%]"
        : "right-[12%] bottom-[22%]";

  return (
    <button
      onClick={onClick}
      className={`${base} ${pos} hidden md:flex text-gray-900 hover:text-gold`}
    >
      <span className="relative after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[1px] after:bg-gold group-hover:after:w-full after:transition-all after:duration-300">
        {label}
      </span>

      {/* ADVANCED LUXURY BUTTON WITH CONTINUOUS ANIMATIONS */}
      <motion.div
        className="relative w-9 h-9 md:w-9 md:h-9 flex items-center justify-center"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer rotating border */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold border-r-gold"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner pulsing glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-transparent"
          animate={{
            boxShadow: [
              "0 0 10px 0px rgba(212, 175, 55, 0.4)",
              "0 0 25px 5px rgba(212, 175, 55, 0.3)",
              "0 0 10px 0px rgba(212, 175, 55, 0.4)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center button circle */}
        <motion.div
          className="relative w-8 h-8 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaPlus className="text-gold text-xs md:text-sm" />
        </motion.div>

        {/* Orbiting sparkles */}
        {[0, 120, 240].map((angle) => (
          <motion.div
            key={angle}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full"
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * 18,
              y: Math.sin((angle * Math.PI) / 180) * 18,
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: angle / 180,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Bottom light glow */}
        <motion.div
          className="absolute bottom-0 w-6 h-3 bg-gold/30 rounded-full blur-md"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </button>
  );
}
