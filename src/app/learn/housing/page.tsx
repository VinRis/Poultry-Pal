
import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Sun, Wind, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function HousingPage() {
  const pageData = {
    title: "Housing & Equipment",
    introduction: 'Proper housing protects your flock from predators, adverse weather, and disease, ensuring they remain healthy and productive.',
    sections: [
      {
        title: 'Coop Essentials',
        icon: <Home className="h-6 w-6 text-primary" />,
        content: 'A good coop should be secure, dry, and easy to clean. Ensure at least 2-3 square feet of space per bird inside the coop and 8-10 square feet in an outdoor run.',
      },
      {
        title: 'Ventilation',
        icon: <Wind className="h-6 w-6 text-primary" />,
        content: 'Good airflow is critical to remove moisture and ammonia, but it should not be drafty. Vents should be placed high up on the walls, above the chickens\' roosting level.',
      },
      {
        title: 'Nesting Boxes & Perches',
        icon: <Sun className="h-6 w-6 text-primary" />,
        content: 'Provide one nesting box for every 4-5 hens. Perches or roosts should be available for chickens to sleep on at night, keeping them off the floor.',
      },
      {
        title: 'Feeders & Waterers',
        icon: <Trash2 className="h-6 w-6 text-primary" />,
        content: 'Use feeders and waterers that keep the contents clean and free from droppings. They should be easy for you to clean and refill regularly.',
      },
    ],
    image: placeholderImages.find(img => img.id === 'housing-1'),
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
