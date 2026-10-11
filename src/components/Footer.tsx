'use client'

import Link from 'next/link'
import { Camera, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: ['Portfolio', 'Categories', 'Enterprise', 'New Releases'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'License Agreement', 'Cookie Policy'],
  Resources: ['API Docs', 'Help Center', 'Community', 'Affiliate Program', 'Brand Assets'],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-800 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: brand + links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Camera className="w-4 h-4 text-black" />
              </div>
              <span className="font-serif text-xl font-bold">LensVault</span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Premium stock photography for the world's best creative teams.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 bg-white/5 hover:bg-white/15 border border-white/5 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-white text-sm font-semibold">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} LensVault, Inc. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs">
            Crafted with ❤️ for creators everywhere — Deployed on{' '}
            <span className="text-neutral-400">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
