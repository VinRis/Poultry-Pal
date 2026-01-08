'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Stethoscope, Menu, User, BookOpen } from 'lucide-react';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarTrigger,
  Sidebar,
  SidebarProvider,
  SidebarInset,
} from '@/components/ui/sidebar';
import Logo from './logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/diagnose', label: 'Diagnosis', icon: Stethoscope },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/profile', label: 'Profile', icon: User },
];


export function AppLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();

  return (
     <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <div className="pb-20">
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
      </body>
    </html>
  )
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-semibold text-sidebar-foreground">
            <Logo className="w-8 h-8 text-primary" />
            <span className='group-data-[collapsible=icon]:hidden'>Poultry Pal</span>
          </Link>
          <div className="flex-1" />
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
          <SidebarTrigger className="md:hidden">
            <Menu />
          </SidebarTrigger>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={
                    item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
                  }
                  tooltip={{
                    children: item.label,
                  }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
