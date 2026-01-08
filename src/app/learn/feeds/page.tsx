import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wheat, Zap, Shield } from 'lucide-react';
import Image from 'next/image';

export default function FeedsPage() {
  const pageData = {
    title: "Feeds & Nutrition",
    introduction: 'A balanced diet is crucial for healthy and productive poultry. Understanding the nutritional needs of your flock is the first step to success.',
    sections: [
      {
        title: 'Key Nutrients',
        icon: <Zap className="h-6 w-6 text-primary" />,
        content: 'Chickens require a balance of proteins, carbohydrates, fats, vitamins, and minerals. Protein is essential for growth and egg production, while carbohydrates provide energy.',
      },
      {
        title: 'Types of Feed',
        icon: <Wheat className="h-6 w-6 text-primary" />,
        content: 'Commercial feeds come in different forms: Mash, crumbles, and pellets. Starter, grower, and layer feeds are formulated for different stages of a chicken\'s life.',
      },
      {
        title: 'Natural Supplements',
        icon: <Shield className="h-6 w-6 text-primary" />,
        content: 'Supplement your flock\'s diet with kitchen scraps (leafy greens, vegetables), insects, and calcium sources like crushed oyster shells or eggshells for stronger eggshells.',
      },
    ],
    image: placeholderImages.find(img => img.id === 'feeds-1'),
  };

  return (
    <div className="container mx-auto px-4 py-8">
       <p className="text-lg text-muted-foreground text-center">{pageData.introduction}</p>

       {pageData.image &&
        <div className="relative h-64 w-full my-8 rounded-lg overflow-hidden">
            <Image
                src={pageData.image.imageUrl}
                alt={pageData.image.description}
                fill
                className="object-cover"
                data-ai-hint={pageData.image.imageHint}
            />
        </div>
      }

      <div className="mt-8 grid gap-6 md:grid-cols-1">
        {pageData.sections.map((section) => (
          <Card key={section.title}>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              {section.icon}
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
