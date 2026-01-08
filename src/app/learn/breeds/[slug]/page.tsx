

'use client';

import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Clock,
  Egg,
  Globe,
  Scale,
  ShieldCheck,
  Sun,
  Utensils,
  Wallet,
  BriefcaseMedical,
  ShoppingBasket
} from 'lucide-react';

import { breeds } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

type StatIcon = 'Egg' | 'Clock' | 'Scale';

const statIcons: { [key in StatIcon]: React.ElementType } = {
  Egg: Egg,
  Clock: Clock,
  Scale: Scale,
};

const environmentIcons: { [key: string]: React.ElementType } = {
  'Arid Areas': Sun,
  'Free Range System': Globe,
  'Disease Resistant': ShieldCheck,
};


export default function BreedDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const breed = breeds.find((b) => b.slug === params.slug);

  if (!breed) {
    notFound();
  }

  const infoCards = [
      {
          icon: Utensils,
          title: 'Feeding Habits',
          content: breed.feedingHabits
      },
      {
          icon: Wallet,
          title: 'Economic Value',
          content: breed.economicValue
      }
  ]

  return (
    <div className="bg-background min-h-screen">
      
      <main className="pb-32">
        <Carousel className="w-full">
          <CarouselContent>
            {breed.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-64 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {breed.images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-4" />
                <CarouselNext className="absolute right-4" />
              </>
          )}
        </Carousel>

        <div className="p-4 space-y-6">
            <div className="grid grid-cols-3 gap-2 text-center">
                {breed.stats.map(stat => {
                    const Icon = statIcons[stat.icon as StatIcon];
                    return (
                        <Card key={stat.key} className="p-3">
                            <div className="flex justify-center mb-1">
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground uppercase">{stat.key}</p>
                            <p className="text-lg font-bold">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.unit}</p>
                        </Card>
                    )
                })}
            </div>

            <div>
                <h2 className="font-bold text-lg mb-2">Suitable Environments</h2>
                <div className="flex flex-wrap gap-2">
                    {breed.suitableEnvironments.map(env => {
                         const Icon = environmentIcons[env] || Globe;
                         return (
                            <Badge key={env} variant="secondary" className="px-3 py-1.5 text-sm bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700/50">
                                <Icon className="mr-2 h-4 w-4" />
                                {env}
                            </Badge>
                         )
                    })}
                </div>
            </div>

            <div>
                <h2 className="font-bold text-lg mb-2">Overview</h2>
                <p className="text-muted-foreground">{breed.overview}</p>
            </div>
            
            <div className="space-y-4">
                {infoCards.map(card => {
                    const Icon = card.icon;
                    return (
                         <Card key={card.title}>
                            <CardContent className="p-4 flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-md">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground">{card.content}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
        <div className="flex gap-4 max-w-2xl mx-auto">
          <Button variant="outline" className="w-full h-14 text-base" asChild>
            <Link href="/diagnose">
              <BriefcaseMedical className="mr-2" />
              Diagnosis
            </Link>
          </Button>
          <Button asChild className="w-full h-14 text-base bg-green-500 hover:bg-green-600 text-white">
            <Link href="/suppliers">
              <ShoppingBasket className="mr-2" />
              Find Suppliers
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
