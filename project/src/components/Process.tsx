
"use client";

import { Phone, Search, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Llamada o WhatsApp",
    description: "Nos contactás comentando tu urgencia. Atendemos al instante.",
    icon: Phone,
  },
  {
    title: "Diagnóstico",
    description: "Llegamos a tu domicilio y realizamos una inspección técnica.",
    icon: Search,
  },
  {
    title: "Solución",
    description: "Reparamos la falla y garantizamos el correcto funcionamiento.",
    icon: CheckCircle2,
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, rápido y efectivo. Así es como resolvemos tus problemas eléctricos.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-background border-4 border-border rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">
                  PASO {index + 1}
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
