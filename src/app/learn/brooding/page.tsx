
import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Thermometer, Droplets, Utensils, Bed, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function BroodingPage() {
  const pageData = {
    title: "Chick Brooding: A Step-by-Step Guide",
    introduction: 'Brooding is the care given to chicks during the first critical weeks. Following a structured plan is key to minimizing mortality and ensuring a healthy, uniform flock.',
    image: placeholderImages.find(img => img.id === 'brooding-1'),
    timeline: [
      {
        week: 'Week 1: The Arrival',
        icon: Thermometer,
        title: 'Heat & Environment Setup',
        details: [
          "**Temperature:** Start the brooder at 32-35°C (90-95°F). Place a thermometer at chick height to monitor.",
          "**Brooder Guard:** Use a circular brooder guard (cardboard or wood) to keep chicks near heat and prevent drafts.",
          "**Litter:** Provide 3-4 inches of dry wood shavings or chopped straw. Cover with paper for the first 2-3 days.",
          "**Action:** 24 hours before chicks arrive, pre-heat the brooder. Check for even temperature distribution."
        ]
      },
      {
        week: 'Week 1: The Arrival',
        icon: Droplets,
        title: 'Water & Feed Introduction',
        details: [
            "**Water:** Provide clean, lukewarm water in shallow drinkers. Add electrolytes/glucose for the first 3 days to combat stress.",
            "**Action:** Gently dip each chick's beak into the water upon arrival to teach them where to drink.",
            "**Feed:** Scatter high-protein starter mash (21-24% protein) on the paper and in shallow feeders.",
            "**Lighting:** Provide 24-hour light for the first week to encourage eating and drinking."
        ]
      },
      {
        week: 'Week 2: Gradual Adjustment',
        icon: Zap,
        title: 'Temperature & Space Reduction',
        details: [
          "**Temperature:** Reduce brooder temperature to 29-32°C (85-90°F).",
          "**Space:** Expand the brooder guard to give chicks more room to move around.",
          "**Feeders & Drinkers:** Remove the paper covering the litter. Transition to regular tube feeders and bell drinkers.",
          "**Observation:** Watch for chick behavior. Huddling means it's too cold; panting and spreading out means it's too hot."
        ]
      },
      {
        week: 'Week 3: Hardening Off',
        icon: ShieldCheck,
        title: 'Vaccination & Health',
        details: [
          "**Temperature:** Lower temperature to 26-29°C (80-85°F).",
          "**Vaccination:** This is often the time for the first Gumboro (IBD) vaccination. Consult a vet for your local schedule.",
          "**Litter Management:** Keep litter dry by removing wet spots and turning it regularly to prevent coccidiosis.",
          "**Feed:** Continue with starter mash. Ensure feed is always available."
        ]
      },
      {
        week: 'Week 4: Final Brooding Stage',
        icon: Bed,
        title: 'Weaning Off Heat',
        details: [
          "**Temperature:** Reduce temperature to 23-26°C (75-80°F). By the end of the week, if the ambient temperature is warm enough, heat can be turned off during the day.",
          "**Brooder Guard:** The brooder guard can usually be removed completely, allowing chicks access to the entire house.",
          "**Perches:** For layers, introduce low perches to encourage roosting behavior.",
          "**Feed Transition:** For broilers, start mixing starter feed with finisher feed to transition them slowly."
        ]
      },
    ]
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

      <div className="mt-8">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {pageData.timeline.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">{item.week}</p>
                                <h3 className="font-semibold text-lg text-left">{item.title}</h3>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-16">
                        <ul className="list-disc list-outside space-y-2 ml-4">
                            {item.details.map((detail, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
