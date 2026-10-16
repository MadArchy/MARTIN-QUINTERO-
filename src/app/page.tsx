import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Contact />
    </>
  );
}
