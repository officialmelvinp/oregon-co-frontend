"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f1] text-gray-700">
      {/* Main footer links */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* CONTACT */}
        <div>
          <h3 className="text-black text-lg font-serif font-semibold mb-5 tracking-wide">
            Contact Us
          </h3>

          <ul className="space-y-4 text-lg text-gray-600 font-serif">
            {["Chat", "Email Us", "(866) 467-4263", "Find a Store"].map(
              (item, i) => (
                <li key={i}>
                  <button
                    onClick={() => {}}
                    className="hover:text-black transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-black text-lg font-serif font-semibold mb-5 tracking-wide">
            Customer Service
          </h3>
          <ul className="space-y-4 text-lg text-gray-600 font-serif">
            {[
              "All Inclusive Free Lifetime Warranty℠",
              "Easy Trade-Up Program℠",
              "Shipping",
              "Returns",
              "Return for Service",
              "Service & Maintenance",
            ].map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {}}
                  className="hover:text-black transition-colors text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-black text-lg font-serif font-semibold mb-5 tracking-wide">
            About Oregon Co.
          </h3>
          <ul className="space-y-4 text-lg text-gray-600 font-serif">
            {[
              "Why Oregon Co.?",
              "Oregon Co. Cares",
              "FAQs",
              "In The News",
              "Oregon Co. Blog",
              "Careers",
              "Reviews",
              "Corporate Responsibility",
            ].map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {}}
                  className="hover:text-black transition-colors text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-black text-lg font-serif font-semibold mb-5 tracking-wide">
            Resources
          </h3>
          <ul className="space-y-4 text-lg text-gray-600 font-serif">
            {[
              "Oregon Co. Credit Card",
              "Gift Cards",
              "Order, Layaway & Shop Job Lookup",
              "Terms & Conditions",
              "Privacy Policy",
              "Do Not Share My Personal Information (California Residents)",
              "Site Map",
              "Accessibility",
            ].map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {}}
                  className="hover:text-black transition-colors text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar — copyright + social icons */}
      <div className="border-t border-gray-200 bg-[#eeece8]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            Copyright © 2000-2026 Oregon Co. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              FaFacebookF,
              FaTwitter,
              FaPinterestP,
              FaInstagram,
              FaLinkedinIn,
              FaYoutube,
            ].map((Icon, i) => (
              <button
                key={i}
                onClick={() => {}}
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-black transition-colors flex items-center justify-center"
              >
                <Icon className="text-white text-sm" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
