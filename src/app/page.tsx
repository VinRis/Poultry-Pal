import Image from 'next/image';
import Link from 'next/link';
import { Stethoscope, BookOpen, Feather } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-data';
import PageHeader from '@/components/common/page-header';

export default function Home() {
  const heroImage = placeholderImages.find((img) => img.id === 'hero-1');

  const features = [
    {
      title: 'Diagnose Sickness',
      description: 'Upload an image of a sick chicken or droppings to get an AI-powered diagnosis suggestion.',
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      href: '/diagnose',
      cta: 'Start Diagnosing',
    },
    {
      title: 'Learning Hub',
      description: 'Explore comprehensive guides on poultry farming, from broilers and layers to disease prevention.',
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      href: '/learn',
      cta: 'Start Learning',
    },
    {
      title: 'Breed Explorer',
      description: 'Discover information about various poultry breeds suitable for East Africa, like Kienyeji and Kuroiler.',
      icon: <Feather className="h-8 w-8 text-primary" />,
      href: '/learn/breeds',
      cta: 'Explore Breeds',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[40vh] md:h-[50vh]">
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-headline">
              Welcome to Poultry Pal
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl px-4">
              Your digital companion for successful poultry farming in Kenya and East Africa.
            </p>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <PageHeader title="Get Started" description="Choose a feature to begin your journey." className="text-center mb-8" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col items-center">
                    <p className="text-muted-foreground flex-grow">{feature.description}</p>
                    <Button asChild className="mt-6 w-full bg-primary hover:bg-primary/90">
                      <Link href={feature.href}>{feature.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
