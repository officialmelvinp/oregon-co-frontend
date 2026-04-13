"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const classics = [
  {
    video: "/classics/stud-earrings.mp4",
    img: null,
    alt: "Stud Earrings",
    desc: "Hand-picked studs you can trade up anytime.",
    label: "Shop Stud Earrings",
  },
  {
    video: null,
    img: "/classics/wedding-bands.jpg",
    alt: "Wedding Bands",
    desc: "Find your engagement ring's perfect match.",
    label: "Shop Wedding Bands",
  },
  {
    video: null,
    img: "/classics/tennis-bracelets.jpg",
    alt: "Tennis Bracelets",
    desc: "High-quality tennis bracelets at every price.",
    label: "Shop Tennis Bracelets",
  },
];

export default function BestsellingClassics() {
  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header — centered */}
        <div className="text-center mb-8">
          <h2
            className={`${playfair.className} text-2xl md:text-4xl font-normal text-black`}
          >
            Bestselling Classics
          </h2>
        </div>

        {/* ── DESKTOP: 3 columns ── */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {classics.map((item, idx) => (
            <div key={idx} onClick={() => {}} className="cursor-pointer group">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Image
                    src={item.img!}
                    alt={item.alt}
                    fill
                    sizes="33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
              <p className="mt-1 text-sm underline underline-offset-4 text-black hover:text-[#b99155] transition-colors cursor-pointer font-medium">
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
            {classics.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {}}
                className="flex-none cursor-pointer"
                style={{ width: "calc(50% - 6px)", scrollSnapAlign: "start" }}
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.img!}
                      alt={item.alt}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="mt-2 text-xs text-gray-600 leading-snug">
                  {item.desc}
                </p>
                <p className="mt-1 text-sm underline underline-offset-4 text-black font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
