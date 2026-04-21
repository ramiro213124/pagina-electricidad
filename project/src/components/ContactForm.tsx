
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  phone: z.string().min(8, { message: "Por favor ingresá un teléfono válido." }),
  message: z.string().min(5, { message: "Por favor escribí un breve mensaje." }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto con vos a la brevedad.",
    });
    form.reset();
  }

  return (
    <section id="contacto" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">¿Necesitás un electricista ahora?</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Si es una urgencia, te recomendamos llamar directamente para una atención inmediata. 
              Para consultas generales, dejanos tus datos y te responderemos pronto.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Llamanos 24/7</h4>
                  <a href="tel:+5491112345678" className="text-xl font-headline text-primary hover:underline">+54 9 11 1234-5678</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp Directo</h4>
                  <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="text-xl font-headline text-green-500 hover:underline">Enviar mensaje ahora</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">Zona de Cobertura</h4>
                  <p className="text-muted-foreground">Capital Federal y Gran Buenos Aires (Norte, Sur, Oeste)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-card border border-border p-8 rounded-2xl shadow-xl">
            <h3 className="font-headline text-2xl font-bold mb-8 text-center">Formulario de Contacto</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre..." {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono de contacto</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: 11 1234-5678" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿En qué podemos ayudarte?</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Contanos brevemente tu problema..." {...field} className="bg-background min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold h-12">
                  Enviar Consulta
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
