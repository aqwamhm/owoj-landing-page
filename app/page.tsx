import AboutSection from "@/components/sections/AboutSection";
import HowItWorks from "@/components/sections/HowItWorksSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <HeroSection />
            <AboutSection />
            <HowItWorks />
            <TestimonialsSection />
            <FooterSection />
        </main>
    );
}
