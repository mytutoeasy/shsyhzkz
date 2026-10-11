'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/data'

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">
              Categories
            </p>
            <h2 className="font-serif text-5xl font-bold">
              Browse by <span className="italic text-gradient">Theme</span>
            </h2>
          </div>
          <a
            href="#portfolio"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#portfolio"
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-56 lg:h-64">
                <Image
                  src={cat.cover}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-0.5">{cat.name}</h3>
                    <p className="text-neutral-400 text-xs">{cat.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm font-semibold">
                      {cat.count.toLocaleString()}
                    </div>
                    <div className="text-neutral-500 text-xs">photos</div>
                  </div>
                </div>
              </div>

              {/* Arrow icon on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/0 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
