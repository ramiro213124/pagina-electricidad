
"use client";

import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg">
                <Zap className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="font-headline text-xl font-bold tracking-tight">
                Nex<span className="text-primary">Volt</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Servicio líder en atención de emergencias eléctricas 24/7 en Buenos Aires. Profesionalismo, rapidez y seguridad en cada trabajo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-card hover:bg-primary hover:text-primary-foreground transition-colors rounded-full border border-border">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-card hover:bg-primary hover:text-primary-foreground transition-colors rounded-full border border-border">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-lg">Zonas de Cobertura</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Capital Federal (Todos los barrios)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Zona Norte (Vicente López, Olivos, etc)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Zona Oeste (Ramos Mejía, Morón, etc)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Zona Sur (Avellaneda, Lanús, etc)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#servicios" className="hover:text-primary transition-colors">Nuestros Servicios</Link></li>
              <li><Link href="#nosotros" className="hover:text-primary transition-colors">Quiénes Somos</Link></li>
              <li><Link href="#proceso" className="hover:text-primary transition-colors">Cómo Trabajamos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-lg">Contacto Directo</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>urgencias@nexvolt.com.ar</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NexVolt. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Políticas de Privacidad</Link>
            <Link href="#" className="hover:text-primary">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
