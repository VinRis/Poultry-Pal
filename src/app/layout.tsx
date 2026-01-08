import type { Metadata } from 'next';
import './globals.css';
import { AppLayout } from '@/components/common/nav';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/common/theme-provider';

export const metadata: Metadata = {
  title: 'Poultry Pal',
  description: 'Learn about poultry farming and diagnose chicken diseases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppLayout>
            {children}
            <Toaster />
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}