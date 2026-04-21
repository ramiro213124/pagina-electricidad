
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NexVolt - Electricista 24 Horas',
  description: 'Servicio técnico eléctrico de urgencia 24 horas. Electricistas matriculados para cortes de luz, fallas y reparaciones inmediatas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
