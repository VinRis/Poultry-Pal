
import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Home, Utensils, Egg, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function LayersPage() {
    const pageData = {
        title: 'Guide to Rearing Layers',
        introduction: 'Rearing layers from chicks to point-of-lay requires careful management. This guide provides a simplified timeline for raising a healthy, productive flock.',
        image: placeholderImages.find(img => img.id === 'layers-1'),
        timeline: [
            {
                week: 'Weeks 1-4: Brooding',
                icon: Home,
                title: 'Foundation Phase',
                details: [
                    "**Objective:** Provide a warm, safe environment for chicks.",
                    "**Feed:** Chick Starter Mash (20% Protein).",
                    "**Health:** Provide anti-stress vitamins in water for the first week. Follow the brooding temperature guide (start at 33°C, reduce by 3°C weekly).",
                    "**Action:** Vaccinate against Newcastle (Day 7) and Gumboro (Day 14 & 28). Consult your vet."
                ]
            },
            {
                week: 'Weeks 5-8: Growing Stage',
                icon: Zap,
                title: 'Developing Frame',
                details: [
                    "**Objective:** Develop a strong frame and uniform flock.",
                    "**Feed:** Transition to Growers Mash (16-18% Protein).",
                    "**Management:** Wean off heat completely. Provide adequate floor, feeder, and drinker space to prevent competition.",
                    "**Action:** Administer Fowl Pox vaccine (Week 6-8)."
                ]
            },
            {
                week: 'Weeks 9-16: Pullet Development',
                icon: Utensils,
                title: 'Pre-Lay Period',
                details: [
                    "**Objective:** Prepare birds for egg production without them getting overweight.",
                    "**Feed:** Continue with Growers Mash. Monitor weight to ensure it's on target for the breed.",
                    "**Health:** Deworm the flock around week 12. Watch for any signs of disease.",
                    "**Action:** Administer 2nd Newcastle vaccine (Week 12-14)."
                ]
            },
            {
                week: 'Weeks 17-18: Pre-Lay Transition',
                icon: Lightbulb,
                title: 'Preparing for Production',
                details: [
                    "**Objective:** Stimulate the reproductive system and build calcium reserves.",
                    "**Feed:** Transition to Layers Mash (16-17% Protein, with 3.5-4.5% Calcium). Start this transition at week 17.",
                    "**Housing:** Ensure nesting boxes are clean, accessible, and filled with fresh litter.",
                    "**Action:** Introduce a lighting program. Increase light duration to 14 hours per day to stimulate laying."
                ]
            },
            {
                week: 'Week 19 onwards: Peak Production',
                icon: Egg,
                title: 'Maintaining High Yield',
                details: [
                    "**Objective:** Maximize egg production and maintain flock health.",
                    "**Feed:** Provide high-quality Layers Mash consistently. Supplement with shell grit or limestone for strong eggshells.",
                    "**Management:** Collect eggs 2-3 times daily. Maintain a consistent 16-hour day length.",
                    "**Health:** Continue regular deworming and monitor for external parasites like mites and lice."
                ]
            }
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
