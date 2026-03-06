import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import HoursLocation from "@/components/home/HoursLocation";
import HappyHourBanner from "@/components/home/HappyHourBanner";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SocialProof from "@/components/home/SocialProof";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HappyHourBanner />
      <AboutTeaser />
      <FeaturedDishes />
      <HoursLocation />
      <SocialProof />
      <NewsletterSignup />
    </>
  );
}
