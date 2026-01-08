
'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
  showBackButton?: boolean;
};

export default function PageHeader({ title, description, className, showBackButton = false }: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className={cn("space-y-2 relative", className)}>
      {showBackButton && (
         <Button variant="ghost" size="icon" onClick={() => router.back()} className="absolute -top-1 -left-12 hidden md:inline-flex">
          <ArrowLeft />
        </Button>
      )}
      <h1 className="text-3xl font-bold tracking-tight font-headline text-foreground">{title}</h1>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
