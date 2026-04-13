import Hero from "./sections/hero/Hero";
import ProductCarousel from "./sections/product-carousel/ProductCarousel";
import BestsellingClassics from "./sections/bestselling-classics/BestsellingClassics";
import EasyWays from "./sections/easy-ways/EasyWays";
import WhyCustomers from "./sections/why-customers/WhyCustomers";
import FinancingBanner from "./sections/financing-banner/FinancingBanner";
import About from "./sections/about/About";
import DiamondsBanner from "./sections/diamonds-banner/DiamondsBanner";
import SpringGiftGame from "./sections/spring-gift-game/SpringGiftGame";
import EmailSignup from "./sections/email-signup/EmailSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <DiamondsBanner />
      <SpringGiftGame />
      <BestsellingClassics />
      <EasyWays />
      <WhyCustomers />
      <FinancingBanner />
      <About />
      <EmailSignup />
    </>
  );
}
