"use client"

import { useRef } from "react"
import Image from "next/image"
import Slider from "react-slick"
import { Playfair_Display } from "next/font/google"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const products = [
  { title: "Sapphire Petals Engagement Ring", price: 1775, note: "Center Stone Sold Separately", img: "/products/a.jpg" },
  { title: "Chantal Engagement Ring (0.40 tcw Diamond)", price: 1950, note: "Center Stone Sold Separately", img: "/products/b.jpg" },
  { title: "Woodland Wedding Set", price: 2440, note: "Center Stone Sold Separately", img: "/products/c.jpg" },
  { title: "Cypress Halo Engagement Ring", price: 4175, note: "Center Stone Sold Separately", img: "/products/d.jpg" },
  { title: "Marseille Cathedral Engagement Ring", price: 4405, note: "Center Stone Sold Separately", img: "/products/e.jpg" },
  { title: "Evelyn Engagement Ring with Oval Natural", price: 11640, note: "Center Stone Sold Separately", img: "/products/f.jpg" },
  { title: "Floral Cluster Blue Sapphire Engagement Ring", price: 1625, note: "Center Stone Sold Separately", img: "/products/g.jpg" },
  { title: "Diamond Leaf Engagement Ring", price: 3575, note: "Center Stone Sold Separately", img: "/products/h.jpg" },
  { title: "Privet Engagement Ring", price: 1195, note: "Center Stone Sold Separately", img: "/products/i.jpg" },
  { title: "Meadow Cathedral Engagement Ring", price: 2485, note: "Center Stone Sold Separately", img: "/products/j.jpg" },
  { title: "Aurora Halo Engagement Ring", price: 3200, note: "Center Stone Sold Separately", img: "/products/k.jpg" },
  { title: "Vintage Milgrain Solitaire Ring", price: 1850, note: "Center Stone Sold Separately", img: "/products/l.jpg" },
]

export default function ProductCarousel() {
  const sliderRef = useRef<any>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          swipe: true,
          arrows: false,
          dots: false,
          touchThreshold: 10,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          swipe: true,
          arrows: false,
          dots: false,
          touchThreshold: 10,
        },
      },
    ],
  }

  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* Header row */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className={`${playfair.className} text-2xl md:text-3xl font-normal text-black`}>
              Shop Bestselling Styles
            </h2>
            <button
              onClick={() => {}}
              className="mt-1 text-sm underline underline-offset-2 text-black hover:text-[#b99155] transition-colors"
            >
              Shop All
            </button>
          </div>

          {/* Desktop arrows — top right, md+ only */}
          <div className="hidden md:flex items-center gap-3 mt-1">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-9 h-9 flex items-center justify-center border border-gray-300 hover:border-black transition-colors"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-xs text-gray-600" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-9 h-9 flex items-center justify-center border border-gray-300 hover:border-black transition-colors"
              aria-label="Next"
            >
              <FaChevronRight className="text-xs text-gray-600" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-6 md:mt-8">
          <Slider ref={sliderRef} {...settings}>
            {products.map((item, idx) => (
              <div key={idx} className="px-1.5 md:px-2">
                <button
                  onClick={() => {}}
                  className="w-full text-left group cursor-pointer"
                >
                  {/* Silver/gray background image box — matches ShaneCo */}
                  <div className="relative w-full aspect-square bg-[#eeece9] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain p-3 md:p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text below */}
                  <div className="mt-2 md:mt-3 px-0.5">
                    <p className="text-sm text-gray-800 leading-snug line-clamp-2 min-h-[40px]">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-base font-semibold text-black">
                      ${item.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 italic mt-0.5">
                      {item.note}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  )
}