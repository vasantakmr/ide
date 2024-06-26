import { HeroHighlightDemo } from "@/components/custom/HeroHighlightDemo";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ShineBorder from "@/components/magicui/shine-border";
import { GotPlaced } from "@/components/GotPlaced";
import { Testimonials } from "@/components/Testimonials";
import { ModulesOverview } from "@/components/ModulesOverview";
import { Bonuses } from "@/components/Bonuses";
import VideoDemo from "@/components/landing/VideoDemo";
import Mentor from "@/components/landing/Mentor";
import GetCertified from "@/components/landing/GetCertified";
import { FAQ } from "@/components/landingpage/faq/faq";
import { MasterClassFor } from "@/components/landingpage/masterclassfor/MasterClassFor";

export default function LandingPage() {
  return (
    <div>
      <HeroHighlightDemo />
      <GotPlaced />
      <VideoDemo />
      <MasterClassFor />
      {/* <Testimonials /> */}
      <ModulesOverview />
      <Mentor />
      <Bonuses />
      <GetCertified />
      <FAQ/>
      <div className="sticky bottom-0 left-0 h-24 w-full bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex items-center justify-between px-28 z-[1000]">
        <div>
          {/* <Image src=""></Image> */}
          <p>DSA Master Class</p>
          <p>5k+ Students Enrolled</p>
        </div>
        <div>
          <span className="line-through">₹12000</span>
          <span>  ₹6999</span>
        </div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>
      </div>
    </div>
  );
}
