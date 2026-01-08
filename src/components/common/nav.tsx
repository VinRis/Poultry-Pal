'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Stethoscope, BookOpen, Menu } from 'lucide-react';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Logo from './logo';
import { cn } from '@/lib/utils';

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/diagnose', label: 'Diagnose', icon: Stethoscope },
    { href: '/learn', label: 'Learn', icon: BookOpen },
  ];

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
