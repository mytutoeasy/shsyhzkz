'use client'

import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-neutral-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop"
          alt="Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="font-serif text-6xl lg:text-7xl font-bold leading-[1.08]">
          Start Creating <span className="italic text-gradient">Today</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          Join 340,000+ creatives who use LensVault to power their best work. Start downloading premium assets today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            Browse Portfolio
          </a>
        </div>

        {/* Newsletter */}
        <div className="pt-8 border-t border-white/5 max-w-md mx-auto">
          <p className="text-neutral-500 text-sm mb-4">
            Or get our weekly curation of top photos in your inbox
          </p>
          <div className="flex gap-2 glass rounded-xl p-1.5">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-600 outline-none"
              />
            </div>
            <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
