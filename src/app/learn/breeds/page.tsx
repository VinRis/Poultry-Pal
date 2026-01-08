import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/common/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { breeds } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function BreedsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Poultry Breeds"
        description="Discover local and improved breeds suitable for farming in East Africa."
        showBackButton={true}
      />

      <div className="mt-8 space-y-4">
        {breeds.map((breed) => (
          <Link href={`/learn/breeds/${breed.slug}`} key={breed.name}>
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="md:grid md:grid-cols-3">
                <div className="relative h-40 w-full md:h-full col-span-1">
                  {breed.images[0] && (
                    <Image
                      src={breed.images[0].imageUrl}
                      alt={breed.images[0].description}
                      fill
                      className="object-cover"
                      data-ai-hint={breed.images[0].imageHint}
                    />
                  )}
                </div>
                <div className="col-span-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{breed.name}</CardTitle>
                    <CardDescription>{breed.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-end">
                    <Button variant="ghost" size="icon">
                        <ChevronRight />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
