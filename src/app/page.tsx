import {HeroSection} from "@/components/sections/hero";
import {ConnectionsSection} from "@/components/sections/connections";
import {HowItWorksSection} from "@/components/sections/how-it--works";
import {NetworkSection} from "@/components/sections/network";
import {AboutUsSection} from "@/components/sections/about-us";
import {ReachOutSection} from "@/components/sections/reach-out";
import {FaqsSection} from "@/components/sections/faq";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <ConnectionsSection/>
            <HowItWorksSection/>
            <NetworkSection/>
            <AboutUsSection/>
            <ReachOutSection/>
            <FaqsSection/>
        </>
    );
}