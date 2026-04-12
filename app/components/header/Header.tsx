





















"use client";

import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHeart,
  FaUser,
  FaSearch,
  FaQuestionCircle,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const navLinks = [
  {
    label: "Engagement Rings",
    columns: [
      {
        title: "Design Your Own",
        items: [
          "Shop all Engagement Rings",
          "Start with a Setting",
          "Engagement Ring Settings",
          "Matching Wedding Sets",
          "Start with a Stone",
          "Natural Diamonds",
          "Lab-Grown Diamonds",
          "Color Lab-Grown Diamonds",
          "Color Gemstones",
        ],
      },
      {
        title: "Featured Styles",
        items: [
          "Halo",
          "Vintage",
          "Solitaire",
          "Classic",
          "Perfectly Preset",
          "Promise Rings",
          "New Arrivals",
        ],
      },
      {
        title: "Metal Types",
        items: ["White Gold", "Yellow Gold", "Platinum", "Rose Gold"],
      },
      {
        title: "Helpful Topics & Tools",
        items: [
          "How to Pick a Ring",
          "Diamond Buying Guide",
          "Ring Style Quiz",
          "Customer Gallery",
        ],
        isHelp: true,
      },
    ],
  },
  {
    label: "Wedding Bands",
    columns: [
      {
        title: "Shop All Bands",
        items: [
          "Shop All",
          "Women's Bands",
          "Men's Bands",
          "Custom Band Builder",
          "Couples Bands",
          "Wedding Sets",
        ],
      },
      {
        title: "Shop by Style",
        items: [
          "Diamond",
          "Sapphire",
          "White Gold",
          "Yellow Gold",
          "Rose Gold",
          "Platinum",
          "More Metals",
          "New Arrivals",
        ],
      },
      {
        title: "Helpful Topics & Tools",
        items: ["Wedding Band Guide", "Custom Band Builder"],
        isHelp: true,
      },
    ],
  },
  {
    label: "Diamonds",
    columns: [
      {
        title: "Shop All Diamonds",
        items: [
          "Shop All",
          "Natural Diamonds",
          "Lab-Grown Diamonds",
          "Color Lab-Grown Diamonds",
        ],
      },
      {
        title: "Specialty Diamonds",
        items: [
          "Shane Classic Natural Diamonds",
          "Stargazer Lab-Grown Diamonds",
          "Padma Lab-Grown Diamonds",
        ],
      },
      {
        title: "Diamond Jewelry",
        items: [
          "Shop All",
          "Stud Earrings",
          "Lab-Grown Diamond Jewelry",
          "Diamond Rings",
          "Necklaces",
          "Earrings",
          "Bracelets",
        ],
      },
      {
        title: "Helpful Topics & Tools",
        items: [
          "Diamond Buying Guide",
          "About Natural Diamonds",
          "About Lab-Grown Diamonds",
        ],
        isHelp: true,
      },
    ],
  },
  {
    label: "Gemstones",
    columns: [
      {
        title: "Shop All Gemstones",
        items: [
          "Shop All",
          "Sapphires",
          "Ruby",
          "Amethyst",
          "Morganite",
          "Aquamarine",
        ],
      },
      {
        title: "Color Gemstone Jewelry",
        items: [
          "Shop All",
          "Sapphire",
          "Ruby",
          "Emerald",
          "Pearl",
          "Opal",
          "More Colors",
        ],
      },
      {
        title: "Shop by Style",
        items: [
          "Shop All",
          "Stud Earrings",
          "Necklaces",
          "Rings",
          "Bracelets",
          "Earrings",
          "Birthstones",
          "Pick Your Gem",
        ],
      },
      {
        title: "Helpful Topics & Tools",
        items: ["Pearl Guide", "Gemstone Guide"],
        isHelp: true,
      },
    ],
  },
  {
    label: "Fine Jewelry",
    columns: [
      {
        title: "Shop by Category",
        items: [
          "Shop All",
          "Necklaces",
          "Rings",
          "Earrings",
          "Bracelets",
          "Men's",
        ],
      },
      {
        title: "Gemstone Jewelry",
        items: [
          "Shop All",
          "Diamond",
          "Sapphire",
          "Ruby",
          "Emerald",
          "Pearl",
          "Opal",
          "More Colors",
        ],
      },
      {
        title: "Popular Styles",
        items: [
          "Gold Essentials",
          "Stud Earrings",
          "Hoop Earrings",
          "Chains",
          "Pendants",
          "Tennis Bracelets",
          "New Arrivals",
          "Bestsellers",
        ],
      },
      {
        title: "Gifts",
        items: [
          "Anniversary Rings",
          "Family Jewelry",
          "Birthstones",
          "Engravable",
          "Gift Cards",
          "Perfect Gift Quiz",
        ],
        isHelp: true,
      },
    ],
  },
  {
    label: "Personalize",
    columns: [
      {
        title: "Personalize",
        items: ["Engraving", "Custom Design", "Gift Wrapping"],
      },
    ],
  },
  {
    label: "Support Center",
    columns: [
      {
        title: "Help & Services",
        items: [
          "Contact Us",
          "Free 60-Day Returns",
          "Order, Layaway & Shop Job Lookup",
          "Services & Maintenance",
          "Find a Store",
        ],
      },
      {
        title: "Education & Tools",
        items: [
          "All Inclusive Free Lifetime Warranty™",
          "Easy Trade-Up Program™",
          "Shane Co. Credit Card",
          "FAQs",
          "How-Tos & Guides",
          "Ring Sizing",
          "Financing & Payment Options",
        ],
      },
      {
        title: "About Shane Co.",
        items: [
          "Careers",
          "About Us",
          "The Loupe Blog",
          "Kids in Need Foundation",
        ],
        isHelp: true,
      },
    ],
  },
];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <header className="w-full bg-white text-black fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      {/* -------- MOBILE TOP BAR - Find Your Store -------- */}
      <div className="md:hidden flex items-center px-4 py-2 bg-[#f5f5f0] border-b border-gray-200">
        <FaMapMarkerAlt className="text-base mr-2" />
        <span className="text-sm underline cursor-pointer">
          Find Your Store
        </span>
      </div>

      {/* -------- MOBILE MAIN NAV BAR -------- */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white">
        {/* Left: Hamburger + User */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xl hover:text-gold transition"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <FaUser className="text-lg hover:text-gold transition cursor-pointer" />
        </div>

        {/* Center: Logo — small, elegant, like Shane Co */}
        <h1
          className={`${playfair.className} absolute left-1/2 -translate-x-1/2 text-[17px] tracking-[0.12em] font-normal whitespace-nowrap`}
        >
          OREGON&nbsp;CO.
        </h1>

        {/* Right: Search + Bag */}
        <div className="flex items-center gap-3">
          <FaSearch className="text-lg hover:text-gold transition cursor-pointer" />
          <FaShoppingBag className="text-lg hover:text-gold transition cursor-pointer" />
        </div>
      </div>

      {/* -------- DESKTOP TOP BAR -------- */}
      <div className="hidden md:flex justify-between items-center px-4 md:px-8 py-3 text-[14px] text-gray-700">
        {/* LEFT ICONS */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* LOCATION */}
          <div className="relative group">
            <FaMapMarkerAlt className="text-lg hover:text-gold transition" />

            <div className="absolute left-0 top-full h-6 w-full"></div>

            <div className="absolute left-0 top-full mt-6 w-[300px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out px-8 py-6 z-50">
              <p className={`${playfair.className} text-xl mb-3`}>
                Find My Store
              </p>

              <p className="text-sm text-gray-600 cursor-pointer hover:text-black">
                Use my location
              </p>

              <p className="text-sm text-gray-600 mt-2 cursor-pointer hover:text-black">
                Search by ZIP code
              </p>
            </div>
          </div>

          {/* FAVORITES */}
          <div className="relative group">
            <FaHeart className="text-lg hover:text-gold transition" />

            <div className="absolute left-0 top-full h-6 w-full"></div>

            <div className="absolute left-0 top-full mt-6 w-[300px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out px-8 py-6 z-50">
              <p className={`${playfair.className} text-xl mb-3`}>Favorites</p>

              <p className="text-sm text-gray-600 underline cursor-pointer hover:text-black">
                Log in or sign up to view your favorites
              </p>

              <p className="text-sm text-gray-600 underline cursor-pointer mt-2 hover:text-black">
                Find someone else's favorites
              </p>
            </div>
          </div>

          {/* HELP / SUPPORT */}
          <div className="relative group">
            <FaQuestionCircle className="text-lg hover:text-gold transition" />

            {/* hover bridge */}
            <div className="absolute left-0 top-full h-6 w-full"></div>

            <div className="absolute left-0 top-full mt-6 w-[300px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out px-8 py-6 z-50">
              {/* TITLE (NOT CLICKABLE) */}
              <p className={`${playfair.className} text-xl mb-4`}>
                Help and Order Info
              </p>

              {/* LINKS */}
              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Returns
              </p>

              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Customer Service
              </p>

              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Appointments
              </p>

              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Order Tracking
              </p>

              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Contact Us
              </p>

              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                FAQs
              </p>

              {/* DIVIDER */}
              <div className="border-t my-4"></div>

              {/* CONTACT */}
              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Call (866) 467-4263
              </p>

              <p className="text-sm text-gray-700 cursor-pointer hover:text-black py-1">
                Text Us (720) 730-2009
              </p>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="relative group flex items-center gap-2">
            <FaUser className="text-lg hover:text-gold transition" />
            <span className="hidden md:inline hover:text-gold tracking-wide">
              Sign In
            </span>

            {/* hover bridge */}
            <div className="absolute left-0 top-full h-6 w-full"></div>

            {/* DROPDOWN */}
            <div className="absolute left-0 top-full mt-6 w-[300px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto invisible group-hover:visible transition-all duration-300 ease-out px-8 py-6 z-[999]">
              <p
                className={`${playfair.className} text-[26px] leading-tight mb-3`}
              >
                Let&apos;s see if you have an account.
              </p>

              <p className="text-[14px] text-gray-600 leading-relaxed mb-5">
                Enter your email to get started - we&apos;ll check if
                you&apos;ve shopped with us before.
              </p>

              <input
                placeholder="Enter Email Address"
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition"
              />

              <button className="w-full bg-gray-800 text-white mt-5 py-3 text-sm tracking-widest hover:bg-black transition">
                NEXT
              </button>

              <div className="text-center text-xs text-gray-400 my-4">or</div>

              <button className="w-full border py-3 text-sm mb-2 hover:bg-gray-50 transition cursor-pointer">
                Sign in with Google
              </button>

              <button className="w-full border py-3 text-sm mb-2 hover:bg-gray-50 transition cursor-pointer">
                Sign in with Apple
              </button>

              <button className="w-full border py-3 text-sm hover:bg-gray-50 transition cursor-pointer">
                Login with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          {/* SEARCH - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-72 bg-gray-50 focus-within:border-black transition">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 w-full outline-none bg-transparent text-sm"
            />
          </div>

          {/* SEARCH ICON - Mobile only */}
          <FaSearch className="md:hidden text-gray-500 hover:text-gold transition cursor-pointer" />

          {/* BAG */}
          <div className="relative group">
            <FaShoppingBag className="text-lg hover:text-gold transition" />

            <div className="absolute right-0 top-full h-6 w-full"></div>

            <div className="absolute right-0 top-full mt-6 w-[300px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out px-8 py-6 z-50">
              <p className={`${playfair.className} text-xl mb-3`}>
                My Shopping Bag
              </p>

              <p className="text-sm text-gray-600">
                Looks like your bag is empty...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LOGO - Desktop only */}
      <div className="hidden md:flex flex-col items-center py-5">
        <h1
          className={`${playfair.className} text-3xl md:text-4xl tracking-[0.15em] font-medium`}
        >
          OREGON&nbsp;CO.
        </h1>

        <p className="text-[10px] tracking-[0.45em] text-gray-400 mt-2">
          YOUR FRIEND & JEWELER
        </p>
      </div>

      {/* NAV */}
      <nav className="hidden md:flex justify-center gap-8 lg:gap-12 py-4 border-t border-gray-200 text-[15px]">
        {navLinks.map((link, linkIndex) => {
          const isFirst = linkIndex === 0;
          const isLast = linkIndex === navLinks.length - 1;
          const dropdownAlignment = isFirst
            ? "left-0"
            : isLast
              ? "right-0"
              : "left-1/2 -translate-x-1/2";

          return (
            <div key={link.label} className="relative group">
              <span
                className={`${playfair.className} tracking-[0.08em] text-base cursor-pointer hover:text-gold transition-all duration-300`}
              >
                {link.label}
              </span>

              <div className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300"></div>

              {/* MEGA DROPDOWN */}
              <div
                className={`absolute ${dropdownAlignment} top-full mt-6 bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 ease-out px-10 py-8 z-50 min-w-max`}
              >
                <div
                  className="grid gap-8"
                  style={{
                    gridTemplateColumns: `repeat(${link.columns.length}, minmax(200px, 1fr))`,
                  }}
                >
                  {link.columns.map((column, idx) => (
                    <div key={idx}>
                      {/* COLUMN HEADER */}
                      <p
                        className={`${playfair.className} text-base font-semibold mb-4 tracking-normal ${column.isHelp ? "text-gray-500" : "text-black"}`}
                      >
                        {column.title}
                      </p>

                      {/* COLUMN ITEMS */}
                      <div className="flex flex-col gap-3">
                        {column.items.map((item, itemIdx) => (
                          <p
                            key={itemIdx}
                            className="text-sm text-gray-600 hover:text-black cursor-pointer transition-colors"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* MOBILE MENU PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[90px] bg-white z-40 overflow-y-auto">
          <div className="px-0">
            {/* SIGN IN / SEARCH SECTION */}
            <div className="px-4 py-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-3">
                Sign In / Create Account
              </p>
            </div>
            {/* MAIN NAV ITEMS */}
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(link.label)}
                  className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span
                    className={`${playfair.className} text-base font-medium tracking-wide`}
                  >
                    {link.label}
                  </span>
                  <FaChevronDown
                    className={`text-sm transition-transform ${
                      openAccordion === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

              {/* ACCORDION CONTENT */}
{openAccordion === link.label && (
  <div className="bg-gray-50 px-4 py-4">
    {link.columns.map((column, idx) => (
      <div key={idx} className="mb-6 last:mb-0">
        <p className={`${playfair.className} text-sm font-semibold mb-3 tracking-wide`}>
          {column.title}
        </p>
        <div className="flex flex-col gap-2 ml-2">
          {column.items.map((item, itemIdx) => (
            <button
              key={itemIdx}
              onClick={() => {}}
              className="text-xs text-gray-700 hover:text-black cursor-pointer transition-colors text-left"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
)}
</div>
))}

            {/* BOTTOM UTILITY ITEMS */}
            <div className="border-b border-gray-200">
              <button
                className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => toggleAccordion("stores")}
              >
                <span className="flex items-center gap-2 text-base">
                  <FaMapMarkerAlt /> Stores
                </span>
                <FaChevronDown
                  className={`text-sm transition-transform ${openAccordion === "stores" ? "rotate-180" : ""}`}
                />
              </button>
              {openAccordion === "stores" && (
                <div className="bg-gray-50 px-4 py-4 text-xs text-gray-700">
                  <p className="cursor-pointer hover:text-black mb-2">
                    Use my location
                  </p>
                  <p className="cursor-pointer hover:text-black">
                    Search by ZIP code
                  </p>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => toggleAccordion("help")}
              >
                <span className="flex items-center gap-2 text-base">
                  <FaQuestionCircle /> Help & Order Info
                </span>
                <FaChevronDown
                  className={`text-sm transition-transform ${openAccordion === "help" ? "rotate-180" : ""}`}
                />
              </button>
              {openAccordion === "help" && (
                <div className="bg-gray-50 px-4 py-4 text-xs text-gray-700">
                  <p className="cursor-pointer hover:text-black mb-2">
                    Contact Us
                  </p>
                  <p className="cursor-pointer hover:text-black mb-2">
                    Call (866) 467-4263
                  </p>
                  <p className="cursor-pointer hover:text-black">
                    Text Us (720) 730-2009
                  </p>
                </div>
              )}
            </div>

            {/* CONTACT BUTTONS */}
            <div className="px-4 py-6 flex gap-2">
              <button className="flex-1 bg-gray-700 text-white py-2 text-xs font-medium rounded hover:bg-gray-800 transition">
                Chat
              </button>
              <button className="flex-1 bg-gray-700 text-white py-2 text-xs font-medium rounded hover:bg-gray-800 transition">
                Call
              </button>
              <button className="flex-1 bg-gray-700 text-white py-2 text-xs font-medium rounded hover:bg-gray-800 transition">
                Email
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
