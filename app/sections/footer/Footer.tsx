"use client"

import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-offwhite border-t border-gold pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* CONTACT */}
        <div>
          <h3 className="text-gold text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Live Chat</li>
            <li>Email Us</li>
            <li>(866) 467‑4263</li>
            <li>Find a Store</li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-gold text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>All‑Inclusive Free Lifetime Warranty</li>
            <li>Easy Trade‑Up Program</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-gold text-lg font-semibold mb-4">About Oregon Co</h3>
          <ul className="space-y-2 text-sm">
            <li>Why Oregon Co?</li>
            <li>Our Values & Craftsmanship</li>
            <li>FAQs</li>
            <li>In The News</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-gold text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Gift Cards</li>
            <li>Order, Layaway & Shop Lookup</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="max-w-7xl mx-auto mt-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 text-gold text-xl">
          <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaPinterestP className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
        </div>

        <form className="flex items-center border border-gold rounded overflow-hidden w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 bg-transparent text-sm outline-none w-full md:w-72 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-gold text-black px-4 py-[9px] text-sm font-medium hover:bg-yellow-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400 tracking-wide">
        © 2026 Oregon Co. All Rights Reserved.
      </div>
    </footer>
  )
}
