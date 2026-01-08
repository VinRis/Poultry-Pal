import Link from 'next/link';
import Image from 'next/image';
import { Feather, Bug, Egg, Drumstick, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/common/page-header';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';

export default function LearnPage() {
  const modules = [
    {
      title: 'Poultry Breeds',
      description: 'Learn about different breeds like Kienyeji, Kuroiler, and Kenbro.',
      icon: <Feather className="w-10 h-10 text-primary" />,
      href: '/learn/breeds',
      image: placeholderImages.find(img => img.id === 'kienyeji-1'),
    },
    {
      title: 'Diseases & Cures',
      description: 'A library of common poultry diseases, their symptoms, and prevention methods.',
      icon: <Bug className="w-10 h-10 text-primary" />,
      href: '/learn/diseases',
      image: placeholderImages.find(img => img.id === 'diseases-1'),
    },
    {
      title: 'Rearing Layers',
      description: 'Guides on housing, feeding, and maximizing egg production for layer hens.',
      icon: <Egg className="w-10 h-10 text-primary" />,
      href: '/learn/layers',
      image: placeholderImages.find(img => img.id === 'layers-1'),
    },
    {
      title: 'Rearing Broilers',
      description: 'Tips and techniques for raising healthy broiler chickens for meat.',
      icon: <Drumstick className="w-10 h-10 text-primary" />,
      href: '/learn/broilers',
      image: placeholderImages.find(img => img.id === 'broilers-1'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Learning Hub"
        description="Expand your knowledge on poultry farming."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {modules.map((mod) => (
          <Card key={mod.title} className="overflow-hidden flex flex-col group">
            <div className="relative h-48 w-full">
               {mod.image && (
                <Image
                    src={mod.image.imageUrl}
                    alt={mod.image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={mod.image.imageHint}
                />
               )}
            </div>
            <CardHeader className="flex-row items-center gap-4">
              {mod.icon}
              <div>
                <CardTitle className="font-headline text-xl">{mod.title}</CardTitle>
                <CardDescription>{mod.description}</CardDescription>
              </div>
            </CardHeader>
             <CardFooter className="mt-auto">
               <Button asChild variant="outline" className="w-full">
                <Link href={mod.href}>
                  Explore Section <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
