import type { Metadata } from 'next';
import './globals.css';
import { AppLayout } from '@/components/common/nav';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Poultry Pal',
  description: 'Learn about poultry farming and diagnose chicken diseases.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppLayout>
      {children}
      <Toaster />
    </AppLayout>
  );
}
