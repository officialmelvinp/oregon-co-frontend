"use client"

import Slider from "react-slick"
import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  {
    title: "Evelyn Engagement Ring with Oval Natural",
    price: 11640,
    img: "/products/ring1.jpg",
  },
  {
    title: "Floral Cluster Blue Sapphire Engagement Ring",
    price: 1625,
    img: "/products/ring2.jpg",
  },
  {
    title: "Diamond Leaf Engagement Ring",
    price: 3575,
    img: "/products/ring3.jpg",
  },
  {
    title: "Privet Engagement Ring",
    price: 1195,
    img: "/products/ring4.jpg",
  },
  {
    title: "Meadow Cathedral Engagement Ring",
    price: 2485,
    img: "/products/ring5.jpg",
  },
]

export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="py-16 bg-offwhite text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif border-l-4 border-gold pl-3">
            Shop Bestselling Styles
          </h2>
          <a href="#" className="text-gold font-medium hover:underline">
            Shop All
          </a>
        </div>

        <Slider {...settings}>
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-3 cursor-pointer"
            >
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <div className="relative w-full h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="mt-4 font-medium text-center">{item.title}</h3>
                <p className="text-center text-gold font-semibold text-lg mt-1">
                  ${item.price.toLocaleString()}
                </p>
                <p className="text-center text-sm text-gray-400">
                  Center Stone Sold Separately
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
