import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import Portfolioo from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <Services/>
   <Portfolioo/>
   <Reviews/>
   <FAQs/>
   {/* <ContactSection/> */}
   </>
  );
}
