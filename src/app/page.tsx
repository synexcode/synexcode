import ContactSection from "@/components/Contact";
import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <Services/>
   <Portfolio/>
   <Reviews/>
   <FAQs/>
   <ContactSection/>
   </>
  );
}
