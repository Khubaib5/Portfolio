"use client";
import Hero from "../components/component/Hero";
import DotPattern from "./components/magicui/dotPattern";
import { cn } from "../lib/utils";
import BentoLayout from "../app/components/BentoLayout";
import Projects from "../app/components/Projects";
import IconCloudDemo from "../app/components/Tech";
import MeteorDemo from "../app/components/Approach";
import Footer from "../app/components/Footer";
import Contact from "../app/components/Contact";
import BookingCalendar from "../app/components/BookingCalendar";

export default function Home() {
  return (
    <div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      <Hero />
      <BentoLayout />

      <div className="flex items-center justify-center mb-10">
        {/* <IconCloudDemo /> */}
      </div>
      <Projects />
      <MeteorDemo />
      <BookingCalendar />
      <Contact />
      <Footer />
    </div>
  );
}
