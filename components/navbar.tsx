"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Facebook, Instagram, Twitter, Menu } from 'lucide-react'
import { ModeToggle } from "./mode-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Student Life", href: "/student-life" },
  { name: "News & Events", href: "/news-events" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Row - White background */}
      <div className="bg-white">
        <div className="container flex flex-col sm:flex-row py-4">
          {/* Social Icons and Register Button - Full width on mobile */}
          <div className="w-full flex justify-between items-center mb-4 sm:hidden">
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 transition-colors hover:text-[#6e1010]"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 transition-colors hover:text-[#6e1010]"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 transition-colors hover:text-[#6e1010]"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <Button 
              asChild 
              className="bg-[#6e1010] text-white hover:bg-[#7e2020]"
            >
              <Link href="/register">Register Online</Link>
            </Button>
          </div>

          {/* Logo and School Info Row */}
          <div className="flex items-center md:justify-between sm:justify-start sm:flex-1">
            <div className="flex items-center space-x-3">
              <Image
                src="/kisowera-ss-logo-red.png"
                alt="Kisowera Secondary School Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#6e1010]">
                  Kisowera Secondary School
                </span>
                <span className="text-sm text-gray-600">Faith and Determination</span>
              </div>
            </div>

            {/* Social Icons and Register Button - Hidden on mobile, shown on desktop */}
            <div className="hidden sm:flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 transition-colors hover:text-[#6e1010]"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 transition-colors hover:text-[#6e1010]"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 transition-colors hover:text-[#6e1010]"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
              <Button 
                asChild 
                className="bg-[#6e1010] text-white hover:bg-[#7e2020]"
              >
                <Link href="/register">Register Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Maroon background */}
      <div className="bg-[#6e1010]">
        <div className="container flex h-14 items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-white hover:bg-[#7e2020] focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-[300px] bg-[#6e1010] text-white"
            >
              <div className="mt-6 mb-8">
                <Image
                  src="/kisowera-ss-logo-red.png"
                  alt="Kisowera Secondary School Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <MobileNav items={navItems} setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-white transition-colors hover:text-gray-200",
                      pathname === item.href ? "text-white" : "text-gray-200"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ 
  items, 
  setIsOpen 
}: { 
  items: { name: string; href: string }[]
  setIsOpen: (open: boolean) => void 
}) {
  const pathname = usePathname()
  return (
    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <MobileLink
            key={item.href}
            href={item.href}
            pathname={pathname}
            setIsOpen={setIsOpen}
          >
            {item.name}
          </MobileLink>
        ))}
      </div>
    </ScrollArea>
  )
}

function MobileLink({
  children,
  href,
  pathname,
  setIsOpen,
}: {
  children: React.ReactNode
  href: string
  pathname: string
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-200 transition-colors hover:text-white",
        pathname === href && "text-white"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}

