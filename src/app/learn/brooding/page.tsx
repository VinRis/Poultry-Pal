
import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Droplets, Utensils, Bed } from 'lucide-react';
import Image from 'next/image';

export default function BroodingPage() {
  const pageData = {
    title: "Chick Brooding",
    introduction: 'Brooding is the care given to chicks during the first few weeks of life. Proper brooding is critical for raising a healthy flock.',
    sections: [
      {
        title: 'Heat',
        icon: <Thermometer className="h-6 w-6 text-primary" />,
        content: 'Chicks need a warm, draft-free environment. Start the brooder at 32-35°C (90-95°F) for the first week and reduce the temperature by 3°C (5°F) each week until they are fully feathered.',
      },
      {
        title: 'Water',
        icon: <Droplets className="h-6 w-6 text-primary" />,
        content: 'Provide clean, fresh water at all times. Use shallow waterers to prevent chicks from drowning. Dip their beaks in water upon arrival to encourage drinking.',
      },
      {
        title: 'Feed',
        icon: <Utensils className="h-6 w-6 text-primary" />,
        content: 'Start chicks on a high-protein starter feed (20-24% protein). Ensure feed is always available. Scatter feed on paper for the first couple of days to encourage pecking.',
      },
      {
        title: 'Bedding',
        icon: <Bed className="h-6 w-6 text-primary" />,
        content: 'Use 2-4 inches of dry, absorbent litter material like wood shavings or chopped straw. Keep the bedding clean and dry to prevent disease.',
      },
    ],
    image: placeholderImages.find(img => img.id === 'brooding-1'),
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

      <div className="mt-8 grid gap-6 md:grid-cols-2">
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
