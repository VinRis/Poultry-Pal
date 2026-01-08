
import { placeholderImages } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Utensils, Home, Shield, Zap, Target } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function BroilersPage() {
    const pageData = {
        title: 'Guide to Rearing Broilers',
        introduction: 'Broilers are raised for meat and can reach market weight in just 6-7 weeks. This guide provides a week-by-week plan for optimal growth and health.',
        image: placeholderImages.find(img => img.id === 'broilers-1'),
        timeline: [
            {
                week: 'Week 1: Brooding',
                icon: Thermometer,
                title: 'Critical First Week',
                details: [
                    "**Feed:** Broiler Starter Crumbs (23% Protein). Provide ad-libitum (always available).",
                    "**Water:** Fresh, clean water with anti-stress vitamins for the first 3-5 days.",
                    "**Temperature:** Maintain brooder at 32-35°C (90-95°F).",
                    "**Health:** Monitor for pasting (blocked vents) and ensure chicks are active.",
                    "**Weight Target:** ~180-200 grams by day 7."
                ]
            },
            {
                week: 'Week 2: Growth Phase',
                icon: Utensils,
                title: 'Increasing Intake',
                details: [
                    "**Feed:** Continue with Broiler Starter Crumbs.",
                    "**Temperature:** Reduce temperature to 30°C (86°F).",
                    "**Space:** Expand the brooding area to give birds more space.",
                    "**Litter:** Keep litter dry. Remove wet spots and top up with fresh shavings.",
                    "**Weight Target:** ~450-500 grams by day 14."
                ]
            },
            {
                week: 'Week 3: Vaccination & Feed Change',
                icon: Shield,
                title: 'First Health Checks',
                details: [
                    "**Vaccination:** Administer 1st Gumboro (IBD) vaccine, typically via drinking water. Consult a vet.",
                    "**Feed:** Transition from starter to Broiler Grower Pellets (21% Protein). Mix feeds over 2-3 days.",
                    "**Temperature:** Lower temperature to 27°C (81°F).",
                    "**Ventilation:** Ensure good air circulation to remove ammonia.",
                    "**Weight Target:** ~900-1000 grams by day 21."
                ]
            },
            {
                week: 'Week 4: Rapid Growth',
                icon: Zap,
                title: 'Maximizing Feed Conversion',
                details: [
                    "**Feed:** Exclusively Broiler Grower Pellets.",
                    "**Vaccination:** Administer 2nd Gumboro (IBD) vaccine.",
                    "**Temperature:** Lower temperature to 24°C (75°F).",
                    "**Biosecurity:** Strictly limit visitors to prevent disease introduction.",
                    "**Weight Target:** ~1.5-1.6 kg by day 28."
                ]
            },
            {
                week: 'Week 5: Finishing Phase',
                icon: Target,
                title: 'Building Mass',
                details: [
                    "**Feed:** Transition to Broiler Finisher Pellets (19% Protein).",
                    "**Temperature:** Wean birds off supplementary heat. Aim for 21°C (70°F).",
                    "**Space:** Provide at least 1 sq. ft. per bird.",
                    "**Health:** Watch for respiratory issues. Ensure good ventilation.",
                    "**Weight Target:** ~2.1-2.3 kg by day 35."
                ]
            },
            {
                week: 'Week 6-7: Market Ready',
                icon: Home,
                title: 'Final Preparations',
                details: [
                    "**Feed:** Continue with Broiler Finisher Pellets. Withdraw any medicated feed according to vet instructions (withdrawal period).",
                    "**Handling:** Handle birds gently to avoid bruising the meat.",
                    "**Marketing:** Plan your market logistics. Birds are typically sold at 1.8-2.5 kg live weight.",
                    "**Final Weight Target:** ~2.5-3.0 kg by day 42."
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
