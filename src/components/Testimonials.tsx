
"use client";

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Ricardo Gómez",
    role: "Dueño de Restaurante",
    content: "Se nos cortó la luz un sábado a la noche con el local lleno. Vinieron en 20 minutos y solucionaron una térmica quemada. Salvaron la noche.",
    stars: 5,
    avatar: "RG"
  },
  {
    name: "Mariana Costa",
    role: "Vecina de CABA",
    content: "Excelente servicio. Llamé por un cortocircuito en la cocina y fueron muy profesionales. Me explicaron todo y el precio fue justo.",
    stars: 5,
    avatar: "MC"
  },
  {
    name: "Juan Pablo Torres",
    role: "Administrador de Consorcio",
    content: "Trabajamos con NexVolt para todas las urgencias del edificio. Son rápidos, prolijos y siempre tienen repuestos encima.",
    stars: 5,
    avatar: "JT"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La confianza se construye con resultados. Miles de familias y empresas ya confían en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border relative pt-8">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
