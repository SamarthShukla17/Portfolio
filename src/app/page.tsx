import Timeline from "@/components/Timeline"
import HeroSection from "@/components/HeroSection";
import Timeline2 from "@/components/Timeline2";
import Profile from "@/components/Profile";
import Services_offered from "@/components/Services_offered"
import Footer from "@/components/Footer";


export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Timeline />
      <Timeline2 />
      <Services_offered />
      <Profile />
      <Footer />

    </main>
  );
}
