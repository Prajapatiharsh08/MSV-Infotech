"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Our Story", href: "/about#story" },
      { name: "Our Team", href: "/about#team" },
      { name: "Our Mission", href: "/about#mission" },
    ],
  },
  {
    name: "Investment Plans",
    href: "/investment-plans",
    submenu: [
      { name: "Quarterly Compounding", href: "/investment-plans#quarterly" },
      { name: "Tree Family Plan", href: "/investment-plans#tree-family" },
      { name: "Systematic Investment", href: "/investment-plans#systematic" },
    ],
  },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Calculator", href: "/calculator" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-green text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span>info@msvinfotech.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "bg-white sticky top-0 z-40 transition-all duration-300",
          scrolled ? "shadow-md py-2" : "shadow-sm py-4",
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MSV Infotech Pvt. Ltd.</span>
              <div className="flex items-center">
                <div className="bg-dark-green text-white p-2 rounded-lg mr-2 transform transition-transform hover:rotate-12">
                  <span className="text-xl font-bold">MSV</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-dark-green">MSV</span>
                  <span className="text-2xl font-medium text-light-green">Infotech</span>
                  <span className="block text-xs text-gray-500">Secure Investment Solutions</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-dark-green flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-dark-green relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-green transition-all group-hover:w-full"></span>
                </Link>
              ),
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="bg-accent hover:bg-[hsl(var(--gold-hover))] transition-all duration-300 transform hover:scale-105">
              Invest Now
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
          <div className="fixed inset-0 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">MSV Infotech Pvt. Ltd.</span>
                <div className="flex items-center">
                  <div className="bg-dark-green text-white p-2 rounded-lg mr-2">
                    <span className="text-xl font-bold">MSV</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-dark-green">MSV</span>
                    <span className="text-2xl font-medium text-light-green">Infotech</span>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div className="space-y-2">
                          <div className="text-base font-semibold leading-7 text-gray-900 px-3 py-2">{item.name}</div>
                          <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button className="w-full bg-accent hover:bg-[hsl(var(--gold-hover))]">Invest Now</Button>
                </div>
                <div className="py-6 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 1234567890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@msvinfotech.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
