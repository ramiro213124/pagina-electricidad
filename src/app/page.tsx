
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustFactors from '@/components/TrustFactors';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <TrustFactors />
        <Process />
        <Testimonials />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
    </div>
  );
}
