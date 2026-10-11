'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-5xl font-bold">
            Loved by <span className="italic text-gradient">Creatives</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass rounded-2xl p-8 flex flex-col gap-6 hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-300 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-neutral-500 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
