
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  Settings,
  Search,
  CheckCircle,
  ChevronRight,
  BriefcaseMedical,
  Camera,
  ShieldCheck,
  FlaskConical,
  HeartPulse,
} from 'lucide-react';
import { diseases, placeholderImages } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

type Disease = (typeof diseases)[0] & { type: string; severity: string; };

const diseaseImages: { [key: string]: string | undefined } = {
  'Newcastle Disease': placeholderImages.find(img => img.id === 'diseases-1')?.imageUrl,
  'Coccidiosis': placeholderImages.find(img => img.id === 'broilers-1')?.imageUrl,
  'Fowl Pox': placeholderImages.find(img => img.id === 'kenbro-1')?.imageUrl,
  'Gumboro Disease': placeholderImages.find(img => img.id === 'kuroiler-1')?.imageUrl,
};


const getSeverityClass = (severity: string): string => {
  switch (severity.toLowerCase()) {
    case 'high':
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'moderate':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};


export default function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  
  const filters = ['All', 'Viral', 'Bacterial', 'Parasitic'];

  const filteredDiseases: Disease[] = diseases
    .map(d => {
        const type = d.cure.toLowerCase().includes('no cure') ? 'Viral' :
                     d.name.toLowerCase().includes('coccidiosis') ? 'Parasitic' : 'Bacterial';
        const severity = d.symptoms.length > 3 ? 'High' : d.symptoms.length > 2 ? 'Moderate' : 'Low';
        return { ...d, type, severity };
    })
    .filter(disease => {
      const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'All' || disease.type === activeFilter;
      return matchesSearch && matchesFilter;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gray-50/90 backdrop-blur-sm sticky top-0 z-40 p-4 flex items-center justify-between">
        <Button variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
        <h1 className="text-xl font-bold">Disease Library</h1>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
      </header>

      <main className="p-4 space-y-6 pb-32">
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 border border-green-200 rounded-full px-4 py-2 self-start mx-auto">
          <CheckCircle className="w-4 h-4" />
          <span>Library available offline</span>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search diseases (e.g., Newcastle)"
            className="pl-10 h-12 rounded-full bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {filters.map(filter => (
            <Button 
              key={filter}
              variant={activeFilter === filter ? 'default' : 'secondary'}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full whitespace-nowrap",
                 activeFilter === filter && 'bg-green-500 hover:bg-green-600 text-white'
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">COMMON DISEASES</h2>
          <div className="space-y-3">
            {filteredDiseases.map((disease) => (
              <Card key={disease.name} className="p-3 bg-white shadow-md rounded-2xl" onClick={() => setSelectedDisease(disease)}>
                <div className="flex items-center gap-4 cursor-pointer">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                    <Image 
                      src={diseaseImages[disease.name] || 'https://picsum.photos/seed/sickchicken/200'} 
                      alt={disease.name} 
                      fill 
                      className="object-cover"
                      data-ai-hint="sick chicken"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{disease.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{disease.symptoms[0]}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs">
                       <Badge className={cn("border-none", getSeverityClass(disease.severity))}>
                        Severity: {disease.severity}
                      </Badge>
                      <span className="text-muted-foreground">• {disease.type}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {selectedDisease && (
          <Dialog open={!!selectedDisease} onOpenChange={(open) => !open && setSelectedDisease(null)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline">{selectedDisease.name}</DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <Badge className={cn("border-none", getSeverityClass(selectedDisease.severity))}>
                      Severity: {selectedDisease.severity}
                    </Badge>
                    <span className="text-muted-foreground">• {selectedDisease.type}</span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                    <HeartPulse className="text-primary"/> Symptoms
                  </h3>
                   <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {selectedDisease.symptoms.map((symptom, i) => <li key={i}>{symptom}</li>)}
                  </ul>
                </div>
                <div>
                   <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                    <ShieldCheck className="text-primary"/> Prevention
                  </h3>
                   <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {selectedDisease.prevention.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div>
                   <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                    <FlaskConical className="text-primary"/> Cure & Treatment
                  </h3>
                  <p className="text-muted-foreground">{selectedDisease.cure}</p>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        <Card className="bg-slate-800 text-white rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-green-500/20 text-green-400 p-3 rounded-full">
                    <BriefcaseMedical className="w-8 h-8" />
                </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Need expert advice?</h3>
            <p className="text-slate-300 mb-4">Connect with local veterinarians in your area for specialized treatment plans.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">Find a Vet</Button>
        </Card>

      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full !px-8 !py-6 text-lg font-bold shadow-lg">
            <Link href="/diagnose">
                <Camera className="mr-3" />
                Diagnose Now
            </Link>
        </Button>
      </div>

    </div>
  );
}
