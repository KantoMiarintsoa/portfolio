import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LightRays from '@/components/ui/LightRays';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-10000">
          {/* Light Rays Background Animation */}
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.8}
            lightSpread={3}
            rayLength={3}
            pulsating={true}
            fadeDistance={0.5}
            saturation={1.0}
            followMouse={true}
            mouseInfluence={0.15}
          />
        </div>
        <Navigation />
        <Hero />
      </div>
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
