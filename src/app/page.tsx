import Image from 'next/image';
import Link from 'next/link';
import {
  Feather,
  BookOpen,
  Camera,
  Settings,
  MapPin,
  Sun,
  ChevronRight,
  TrendingUp,
  Egg,
  Drumstick,
  Sparkles
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const heroImage = placeholderImages.find((img) => img.id === 'hero-1');
  const layersImage = placeholderImages.find(img => img.id === 'layers-1');
  const broilersImage = placeholderImages.find(img => img.id === 'broilers-1');
  const kienyejiImage = placeholderImages.find(img => img.id === 'kienyeji-1');
  const diseasesImage = placeholderImages.find(img => img.id === 'diseases-1');

  const learningModules = [
    {
      title: 'Layers Guide',
      description: 'Egg production tips & housing',
      icon: <Egg className="w-5 h-5" />,
      href: '/learn/layers',
      image: layersImage,
    },
    {
      title: 'Broilers Guide',
      description: 'Maximize meat yield & growth',
      icon: <Drumstick className="w-5 h-5" />,
      href: '/learn/broilers',
      image: broilersImage,
    },
    {
      title: 'Local Breeds',
      description: 'Kienyeji, Kuroiler & Kenbro',
      icon: <Feather className="w-5 h-5" />,
      href: '/learn/breeds',
      image: kienyejiImage,
    },
    {
      title: 'Disease Library',
      description: 'Common symptoms & cures',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/learn/diseases',
      image: diseasesImage,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-primary">
            <AvatarImage src="https://picsum.photos/seed/farmer/100/100" data-ai-hint="farmer portrait" alt="Farmer" />
            <AvatarFallback>FP</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-bold text-lg">Poultry Hub</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> Nairobi, Kenya</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="w-6 h-6" />
        </Button>
      </header>
      
      <main className="flex-1 p-4 space-y-8">
        <section>
          <h2 className="text-4xl font-bold font-headline">Jambo, Farmer!</h2>
          <p className="flex items-center gap-2 text-yellow-500">
            <Sun className="w-5 h-5" />
            <span>24°C • Partly Cloudy</span>
          </p>
        </section>

        <section>
          <Card className="relative w-full overflow-hidden text-white bg-slate-900">
             {heroImage && (
               <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-60"
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="relative p-6 space-y-3">
              <Badge className="bg-primary/80 border-primary text-primary-foreground backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-2"/>
                AI POWERED
              </Badge>
              <h3 className="text-3xl font-bold">Disease Diagnosis</h3>
              <p className="max-w-xs">Spot sickness early. Take a photo of your bird for instant advice & treatment plans.</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full !px-8 !py-6 text-lg font-bold">
                <Link href="/diagnose">
                  <Camera className="mr-2" />
                  Scan Now
                </Link>
              </Button>
            </div>
          </Card>
        </section>
        
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Learning Modules</h3>
            <Link href="/learn" className="text-primary font-semibold">View All</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {learningModules.map((mod) => (
              <Card key={mod.title} className="overflow-hidden group">
                <Link href={mod.href}>
                  <CardContent className="p-0">
                    <div className="relative h-28 w-full">
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
                    <div className="p-3">
                      <h4 className="font-bold truncate">{mod.title}</h4>
                      <p className="text-xs text-muted-foreground">{mod.description}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="flex items-center justify-between p-4 bg-primary/10 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-background rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary font-bold">MARKET PRICE</p>
                <p className="font-bold text-lg">Eggs (Tray): KES 450</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </Card>
        </section>

      </main>
    </div>
  );
}
