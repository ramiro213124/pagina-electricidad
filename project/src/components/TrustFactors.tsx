
"use client";

import { ShieldCheck, Clock, Zap, CreditCard, Award } from 'lucide-react';

const factors = [
  {
    title: "Matriculados",
    description: "Personal certificado por los entes reguladores.",
    icon: Award,
  },
  {
    title: "Atención 24/7",
    description: "Estamos listos para salir en cualquier momento.",
    icon: Clock,
  },
  {
    title: "Respuesta Rápida",
    description: "Llegamos en menos de 60 minutos en zonas de cobertura.",
    icon: Zap,
  },
  {
    title: "Garantía Escrita",
    description: "Trabajos 100% garantizados para tu tranquilidad.",
    icon: ShieldCheck,
  },
  {
    title: "Medios de Pago",
    description: "Aceptamos efectivo, tarjetas y transferencia.",
    icon: CreditCard,
  }
];

export default function TrustFactors() {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">¿Por qué elegir NexVolt?</h2>
          <p className="text-muted-foreground text-lg mb-16">
            Somos un equipo de profesionales apasionados por la seguridad eléctrica. Entendemos que una urgencia no puede esperar, por eso optimizamos nuestros procesos para estar donde nos necesites, cuando nos necesites.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.slice(0, 4).map((factor, index) => (
              <div key={index} className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border transition-all hover:border-primary/50 group">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <factor.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-xl">{factor.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
