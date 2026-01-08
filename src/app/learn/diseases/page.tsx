import PageHeader from '@/components/common/page-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { diseases } from '@/lib/placeholder-data';
import { AlertTriangle, Shield, Pilcrow } from 'lucide-react';

export default function DiseasesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Disease Library"
        description="An overview of common poultry diseases, their symptoms, and management."
      />

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {diseases.map((disease) => (
            <AccordionItem key={disease.name} value={disease.name}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                {disease.name}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <div>
                  <h4 className="flex items-center font-semibold text-md mb-2">
                    <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                    Symptoms
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {disease.symptoms.map((symptom) => (
                      <li key={symptom}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center font-semibold text-md mb-2">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Prevention
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {disease.prevention.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center font-semibold text-md mb-2">
                    <Pilcrow className="h-5 w-5 mr-2 text-accent-foreground" />
                    Cure / Management
                  </h4>
                  <p className="text-muted-foreground">{disease.cure}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
