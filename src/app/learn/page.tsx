import Link from 'next/link';
import Image from 'next/image';
import {
  Feather,
  BookOpen,
  Egg,
  Drumstick,
  Wheat,
  Home,
  ShieldCheck,
  Baby,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-data';

export default function LearnPage() {
  const modules = [
    {
      title: 'Poultry Breeds',
      description: 'Kienyeji, Kuroiler & Kenbro',
      icon: <Feather className="w-5 h-5" />,
      href: '/learn/breeds',
      image: placeholderImages.find(img => img.id === 'kienyeji-1'),
    },
    {
      title: 'Disease Library',
      description: 'Common symptoms & cures',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/learn/diseases',
      image: placeholderImages.find(img => img.id === 'diseases-1'),
    },
    {
      title: 'Rearing Layers',
      description: 'Egg production tips & housing',
      icon: <Egg className="w-5 h-5" />,
      href: '/learn/layers',
      image: placeholderImages.find(img => img.id === 'layers-1'),
    },
    {
      title: 'Rearing Broilers',
      description: 'Maximize meat yield & growth',
      icon: <Drumstick className="w-5 h-5" />,
      href: '/learn/broilers',
      image: placeholderImages.find(img => img.id === 'broilers-1'),
    },
    {
      title: 'Feeds & Nutrition',
      description: 'A guide to balanced diets',
      icon: <Wheat className="w-5 h-5" />,
      href: '/learn/feeds',
      image: placeholderImages.find(img => img.id === 'feeds-1'),
    },
    {
      title: 'Housing & Equipment',
      description: 'Best practices for coops and gear',
      icon: <Home className="w-5 h-5" />,
      href: '/learn/housing',
      image: placeholderImages.find(img => img.id === 'housing-1'),
    },
    {
      title: 'Chick Brooding',
      description: 'Essential care for young chicks',
      icon: <Baby className="w-5 h-5" />,
      href: '/learn/brooding',
      image: placeholderImages.find(img => img.id === 'brooding-1'),
    },
    {
      title: 'Biosecurity Basics',
      description: 'How to protect your flock',
      icon: <ShieldCheck className="w-5 h-5" />,
      href: '/learn/biosecurity',
      image: placeholderImages.find(img => img.id === 'biosecurity-1'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-lg text-muted-foreground text-center mb-8">
        Expand your knowledge on poultry farming.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map(mod => (
          <Card key={mod.title} className="overflow-hidden group">
            <Link href={mod.href}>
              <CardContent className="p-0">
                <div className="relative h-32 w-full">
                  {mod.image && (
                    <Image
                      src={mod.image.imageUrl}
                      alt={mod.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={mod.image.imageHint}
                    />
                  )}
                  <div className="absolute top-2 right-2 bg-background/80 text-foreground rounded-full p-2 backdrop-blur-sm">
                    {mod.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg truncate">{mod.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {mod.description}
                  </p>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
