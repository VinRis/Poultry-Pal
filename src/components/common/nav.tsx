'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Stethoscope, Menu, User, BookOpen, Settings } from 'lucide-react';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/diagnose', label: 'Diagnosis', icon: Stethoscope },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/settings', label: 'Settings', icon: Settings },
];

const getPageTitle = (pathname: string) => {
    if (pathname === '/') return 'Home';
    if (pathname.startsWith('/diagnose')) return 'Diagnosis';
    if (pathname.startsWith('/learn/breeds/')) return 'Breed Details';
    if (pathname.startsWith('/learn/breeds')) return 'Poultry Breeds';
    if (pathname.startsWith('/learn/diseases')) return 'Disease Library';
    if (pathname.startsWith('/learn/layers')) return 'Rearing Layers';
    if (pathname.startsWith('/learn/broilers')) return 'Rearing Broilers';
    if (pathname.startsWith('/learn')) return 'Learning Hub';
    if (pathname.startsWith('/settings')) return 'Settings';
    return 'Poultry Pal';
}

export function AppLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();
   const title = getPageTitle(pathname);

  return (
    <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center max-w-2xl">
                 <h1 className="text-xl font-bold">{title}</h1>
            </div>
        </header>
        <div className="font-body antialiased pb-24">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
            <div className="flex justify-around items-center p-2 container max-w-2xl">
              {navItems.map((item) => {
                  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                  return (
                    <Link key={item.href} href={item.href} className={cn(
                        "flex flex-col items-center gap-1 p-2 rounded-md transition-colors w-20",
                        isActive ? 'text-primary' : 'text-muted-foreground'
                    )}>
                        <item.icon className="w-6 h-6" />
                        <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                  )
              })}
            </div>
        </div>
    </>
  )
}
