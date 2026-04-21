
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Atención Inmediata 24hs</span>
          </div>
          
          <h1 className="font-headline text-3xl md:text-5xl font-bold mb-4 leading-tight text-shadow-glow">
            Electricista 24hs en <br />
            <span className="text-primary">Buenos Aires</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl font-semibold text-white/90 mb-6">
            Atención urgente en <span className="text-primary underline decoration-2 underline-offset-4">menos de 30 minutos</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Cortes de luz, cortocircuitos y fallas eléctricas. <br className="hidden md:block" />
            Servicio profesional y rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-14 px-8 shadow-xl shadow-primary/20 transition-transform hover:scale-105"
              asChild
            >
              <a href="tel:+5491112345678">
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 hover:bg-white/10 font-bold text-base h-14 px-8 backdrop-blur-sm transition-transform hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
