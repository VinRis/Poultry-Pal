import Image from 'next/image';
import PageHeader from '@/components/common/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { breeds } from '@/lib/placeholder-data';
import { CheckCircle } from 'lucide-react';

export default function BreedsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Poultry Breeds"
        description="Discover local and improved breeds suitable for farming in East Africa."
      />

      <div className="mt-8 space-y-8">
        {breeds.map((breed) => (
          <Card key={breed.name} className="overflow-hidden md:grid md:grid-cols-3">
             <div className="relative h-56 w-full md:h-full col-span-1">
              {breed.image && (
                <Image
                  src={breed.image.imageUrl}
                  alt={breed.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={breed.image.imageHint}
                />
              )}
            </div>
            <div className="col-span-2">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{breed.name}</CardTitle>
                <CardDescription>{breed.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {breed.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
