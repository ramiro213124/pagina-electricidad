
"use client";

import { Zap, Power, ClipboardList, Activity, Layout } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    title: "Cortes de Luz",
    description: "Diagnóstico y restauración inmediata del suministro eléctrico.",
    icon: Power,
  },
  {
    title: "Disyuntores y Térmicas",
    description: "Reparación y recambio de protecciones que saltan sin motivo.",
    icon: Zap,
  },
  {
    title: "Cableado",
    description: "Detección de cortocircuitos y renovación de cables dañados.",
    icon: Activity,
  },
  {
    title: "Tableros Eléctricos",
    description: "Modernización y reparación de tableros principales y seccionales.",
    icon: Layout,
  },
  {
    title: "Emergencias 24h",
    description: "Atención técnica especializada cualquier día a cualquier hora.",
    icon: ClipboardList,
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Servicios Profesionales</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Brindamos soluciones integrales con rapidez y seguridad para tu hogar, comercio o industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all group overflow-hidden">
              <CardHeader className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
