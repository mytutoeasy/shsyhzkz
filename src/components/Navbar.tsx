'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Camera } from 'lucide-react'

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-900/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
            <Camera className="w-4 h-4 text-black" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">LensVault</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#portfolio"
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Browse Photos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-neutral-300 hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#portfolio"
            className="block w-full text-center px-4 py-2.5 bg-white text-black text-sm font-semibold rounded-lg mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Browse Photos
          </a>
        </div>
      )}
    </header>
  )
}
