import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, UserMinus, Fence, HandSoap } from 'lucide-react';
import Image from 'next/image';

export default function BiosecurityPage() {
  const pageData = {
    title: "Biosecurity Basics",
    introduction: 'Biosecurity refers to measures taken to prevent the introduction and spread of diseases in your flock. It is the cheapest and most effective means of disease control.',
    sections: [
      {
        title: 'Isolation',
        icon: <Fence className="h-6 w-6 text-primary" />,
        content: 'Keep your flock isolated from other birds, including wild birds and neighbors\' poultry. Quarantine new birds for at least 30 days before introducing them to your flock.',
      },
      {
        title: 'Traffic Control',
        icon: <UserMinus className="h-6 w-6 text-primary" />,
        content: 'Limit visitors to your farm. Provide clean boots and protective clothing for anyone who must enter the poultry area. A footbath with disinfectant at the entrance is a good practice.',
      },
      {
        title: 'Sanitation',
        icon: <HandSoap className="h-6 w-6 text-primary" />,
        content: 'Clean and disinfect the poultry house, feeders, waterers, and other equipment regularly. Remove old litter and replace it with fresh, dry material.',
      },
    ],
    image: placeholderImages.find(img => img.id === 'biosecurity-1'),
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
