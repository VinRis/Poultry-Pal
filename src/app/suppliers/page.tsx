
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Map, Phone, MessageSquare, Building2, Search } from 'lucide-react';
import Link from 'next/link';

export default function SuppliersPage() {
  const whatsappNumber = '+254732364559';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const facebookLink = 'https://facebook.com/KienyejiPoultryFarmers';

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-primary/10 rounded-full p-6 text-primary">
          <Building2 className="h-16 w-16" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">Supplier Directory Coming Soon!</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Soon, you'll be able to find local suppliers for chicks, feed, and equipment right here, filtered by your region.
      </p>

      <Card className="text-left">
        <CardHeader>
          <CardTitle>Want to be listed as a supplier?</CardTitle>
          <CardDescription>
            If you are a supplier of poultry products or services in East Africa, we want to hear from you. Reach out to get listed in our upcoming directory.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
            <Link href={whatsappLink} target="_blank">
              <MessageSquare className="mr-2" /> Contact us on WhatsApp
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full">
            <Link href={facebookLink} target="_blank">
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              Find us on Facebook
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
