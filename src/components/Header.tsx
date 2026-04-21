
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Zap className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="font-headline text-2xl font-bold tracking-tight">
            Nex<span className="text-primary">Volt</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link>
          <Link href="#nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
          <Link href="#proceso" className="hover:text-primary transition-colors">Cómo trabajamos</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            asChild
          >
            <a href="tel:+5491112345678">
              <Phone className="mr-2 h-4 w-4" />
              Llamar ahora
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="tel:+5491112345678">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
