"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const INFO_ITEMS = [
  {
    id: "ready",
    title: "Ready When You Are",
    desc: "Our in-house jewelers will bring your dream ring to life in days, not weeks, hand-setting your center stone and making sure every detail is just right.",
    video: "/classics/ready.mp4",
  },
  {
    id: "crafted",
    title: "Crafted to Last",
    desc: "We've been experts in craftsmanship since 1929, and your vision is brought to life with the highest quality standards that show in every detail.",
    video: "/classics/crafted.mp4",
  },
  {
    id: "warranty",
    title: "Free Lifetime Warranty",
    desc: "Your ring comes with our All-Inclusive Free Lifetime Warranty that covers everything and even protects your center stone.",
    video: "/classics/warranty.mp4",
  },
];

export default function Hero() {
  const [open, setOpen] = useState<string | null>(null);
  const [showDragHint, setShowDragHint] = useState(true);
  const current = INFO_ITEMS.find((i) => i.id === open);

  // Shared rotation logic for both mobile + desktop
  const rotation = useMotionValue(0);
  const ringRotate = useTransform(rotation, (v) => `rotate(${v}deg)`);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      if (!isDragging.current) {
        rotation.set(rotation.get() + 0.3);
      }
    }, 16);
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [rotation]);

  useEffect(() => {
    const t = setTimeout(() => setShowDragHint(false), 3500);
    return () => clearTimeout(t);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - lastX.current;
    rotation.set(rotation.get() + delta * 0.5);
    lastX.current = e.clientX;
  };
  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f2dfb6] via-[#f7ecd3] to-[#fcf8f3]">
      {/* ===================== MOBILE LAYOUT — FIXED ===================== */}
<div className="md:hidden relative w-full flex flex-col bg-gradient-to-b from-[#d9c299] via-[#c2a77c] to-[#a78351]">

  {/* 1. Headline — flush under header, no top padding */}
  <div className="pt-6 pb-2 text-center px-6">
    <h1
      className={`${playfair.className} text-4xl font-normal leading-[1.2] text-[#2b1e0a]`}
    >
      Create&nbsp;Now,{" "}
      <em className="text-[#b99155] font-semibold not-italic">Love</em>{" "}
      Forever
    </h1>
  </div>

  {/* 2. Single button centered — above the ring */}
  <div className="flex flex-col items-center gap-1.5 py-3">
    <InfoDot onClick={() => setOpen("crafted")} />
    <span className="text-[10px] tracking-[0.15em] text-[#2b1e0a] font-medium text-center leading-tight">
      CRAFTED TO LAST
    </span>
  </div>

  {/* 3. Rotating ring */}
  <div className="relative flex items-center justify-center select-none py-4">
    <motion.img
      src="/classics/hero-ring.jpg"
      alt="Rotating Ring"
      className="h-[280px] w-auto object-contain cursor-grab active:cursor-grabbing drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
      style={{ transform: ringRotate }}
      draggable={false}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />

    {showDragHint && (
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="bg-black/40 text-white text-[10px] tracking-[0.25em] px-4 py-1.5 rounded-full flex items-center gap-2"
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 3.5, times: [0, 0.7, 1] }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M10 2a2 2 0 0 0-2 2v5.5A2.5 2.5 0 0 0 5.5 12c0 .53.17 1.02.45 1.43L8 17.5V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5l2.05-4.07A2.5 2.5 0 0 0 18.5 12 2.5 2.5 0 0 0 16 9.5V4a2 2 0 0 0-2-2h-4z"/>
          </svg>
          DRAG TO ROTATE
        </motion.div>
      </motion.div>
    )}
  </div>

  {/* 4. Two buttons below ring — left and right */}
  <div className="flex justify-between items-start px-10 pt-2 pb-6">
    <div className="flex flex-col items-center gap-1.5">
      <InfoDot onClick={() => setOpen("ready")} />
      <span className="text-[10px] tracking-[0.15em] text-[#2b1e0a] font-medium text-center leading-tight">
        READY WHEN<br />YOU ARE
      </span>
    </div>
    <div className="flex flex-col items-center gap-1.5">
      <InfoDot onClick={() => setOpen("warranty")} />
      <span className="text-[10px] tracking-[0.15em] text-[#2b1e0a] font-medium text-center leading-tight">
        FREE LIFETIME<br />WARRANTY
      </span>
    </div>
  </div>

  {/* 5. CTA button */}
  <div className="px-5 pb-10">
    <button
      className={`${playfair.className} w-full py-3.5 text-xs tracking-[0.15em] text-black bg-white border border-black rounded hover:bg-black hover:text-white transition-all duration-300`}
    >
      SHOP ENGAGEMENT RINGS
    </button>
  </div>
</div>

      {/* ===================== DESKTOP LAYOUT — SHANECO ACCURATE ===================== */}
      <div className="hidden md:flex relative w-full min-h-[85vh] flex-col justify-center overflow-hidden">
        {/* Background gradient floor like ShaneCo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d9c299] via-[#c2a77c] to-[#a78351]" />

        {/* Ring — Smaller, centered, sitting lower */}
        <div className="absolute inset-0 flex items-end justify-center pb-16 z-10">
          <motion.img
            src="/classics/hero-ring.jpg"
            alt="Rotating Ring"
            className="max-h-[62%] w-auto object-contain cursor-grab active:cursor-grabbing drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
            style={{ transform: ringRotate }}
            draggable={false}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
        </div>

        {/* Title — placed above the ring, visible */}
        <div className="absolute top-24 left-0 right-0 text-center z-30 pointer-events-none">
          <h1
            className={`${playfair.className}
    text-5xl xl:text-6xl font-normal leading-[1.15]
    text-[#2b1e0a]`}
          >
            Create&nbsp;Now,{" "}
            <em className="text-[#b99155] font-semibold not-italic">Love</em>{" "}
            Forever
          </h1>
        </div>

        {/* DRAG TO ROTATE hint */}
        {showDragHint && (
          <motion.div
            className="absolute bottom-[32%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="text-white text-[10px] tracking-[0.25em] flex items-center gap-2 opacity-90"
              animate={{ opacity: [1, 1, 0] }}
              transition={{ duration: 3.5, times: [0, 0.7, 1] }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M10 2a2 2 0 0 0-2 2v5.5A2.5 2.5 0 0 0 5.5 12c0 .53.17 1.02.45 1.43L8 17.5V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5l2.05-4.07A2.5 2.5 0 0 0 18.5 12 2.5 2.5 0 0 0 16 9.5V4a2 2 0 0 0-2-2h-4z" />
              </svg>
              <span>DRAG TO ROTATE</span>
            </motion.div>
          </motion.div>
        )}

        {/* LEFT LABEL BUTTONS */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-12">
          <DesktopInfoButton
            label="READY WHEN YOU ARE"
            onClick={() => setOpen("ready")}
            align="left"
          />
          <DesktopInfoButton
            label="CRAFTED TO LAST"
            onClick={() => setOpen("crafted")}
            align="left"
          />
        </div>

        {/* RIGHT LABEL BUTTON */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-20">
          <DesktopInfoButton
            label="FREE LIFETIME WARRANTY"
            onClick={() => setOpen("warranty")}
            align="right"
          />
        </div>

        {/* CTA BUTTON */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <button
            className={`${playfair.className} px-12 py-3 text-sm tracking-[0.2em] text-black bg-white border border-black hover:bg-black hover:text-white transition-all shadow-lg`}
          >
            SHOP ENGAGEMENT RINGS
          </button>
        </div>

        {/* Soft sparkles */}
        <motion.div
          className="absolute top-[38%] left-[52%] w-2.5 h-2.5 bg-[#f5dfa0] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)] z-10 pointer-events-none"
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.8, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[33%] left-[48%] w-[5px] h-[5px] bg-white rounded-full z-10 pointer-events-none"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
        />
      </div>

      {/* ===================== MODAL ===================== */}
      {current && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center md:justify-end z-50 px-4 md:px-0">
          <div className="bg-white w-full sm:max-w-sm md:w-[420px] h-auto md:h-full max-h-[90vh] md:max-h-none shadow-2xl p-6 overflow-y-auto relative rounded-xl md:rounded-none">
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center group"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-gold"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
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
    </section>
  );
}

// Mobile dot button
function InfoDot({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-11 h-11 flex items-center justify-center"
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
    </motion.button>
  );
}

// Desktop info button — label + animated plus dot, side-aware layout
function DesktopInfoButton({
  label,
  onClick,
  align,
}: {
  label: string;
  onClick: () => void;
  align: "left" | "right";
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-4 text-white hover:text-[#f5dfa0] transition-colors duration-300 group ${align === "right" ? "flex-row-reverse" : ""}`}
      whileHover={{ scale: 1.03 }}
    >
      {/* Animated plus dot */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/60 group-hover:border-[#f5dfa0]/80 transition-colors"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.2)",
              "0 0 14px rgba(255,255,255,0.4)",
              "0 0 0px rgba(255,255,255,0.2)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center">
          <FaPlus className="text-white text-xs" />
        </div>
      </div>

      {/* Label */}
      <span className="text-[12px] tracking-[0.22em] font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        {label}
      </span>
    </motion.button>
  );
}
