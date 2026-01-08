import { broilersGuide, placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Utensils, Home, Shield } from 'lucide-react';
import Image from 'next/image';

export default function BroilersPage() {
  const icons: { [key: string]: React.ReactNode } = {
    Brooding: <Thermometer className="h-6 w-6 text-primary" />,
    Feeding: <Utensils className="h-6 w-6 text-primary" />,
    'Housing and Space': <Home className="h-6 w-6 text-primary" />,
    'Health Management': <Shield className="h-6 w-6 text-primary" />,
  };
  const image = placeholderImages.find(img => img.id === 'broilers-1');

  return (
    <div className="container mx-auto px-4 py-8">
       <p className="text-lg text-muted-foreground text-center">{broilersGuide.introduction}</p>

       {image &&
        <div className="relative h-64 w-full my-8 rounded-lg overflow-hidden">
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
            />
        </div>
      }

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {broilersGuide.sections.map((section) => (
          <Card key={section.title}>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              {icons[section.title]}
              <CardTitle className="font-headline">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
