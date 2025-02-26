import Hero from "@/components/home/Hero";
import OurOffering from "@/components/home/OurOffering";
import AboutUs from "@/components/home/AboutUs";
import Testimonial from "@/components/home/Testimonial";
import CallToAction from "./components/home/CallToAction";
import Footer from "./components/home/Footer"
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurOffering />

      <Testimonial />
      <CallToAction/>
      <Footer/>
    </div>
  );
}
