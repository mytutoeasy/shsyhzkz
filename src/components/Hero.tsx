'use client'

import Image from 'next/image'
import { Search, TrendingUp, Award, Download } from 'lucide-react'

const badges = [
  { icon: TrendingUp, label: 'Trending Collections' },
  { icon: Award, label: '4K & 8K Resolution' },
  { icon: Download, label: 'Instant Download' },
]

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain landscape',
    className: 'col-span-1 row-span-2',
    height: 600,
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=280&fit=crop',
    alt: 'Professional portrait',
    className: 'col-span-1',
    height: 280,
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop',
    alt: 'Creative workspace',
    className: 'col-span-1',
    height: 280,
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-800 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0di00aDJ2NGgtMnptMC0zMHYtNGgydjRoLTJ6bTMwIDMwdi00aDJ2NGgtMnptMC0zMHYtNGgydjRoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs text-neutral-400 font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            2.4 Million+ Photos Available
          </div>

          <h1 className="font-serif text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
            Visuals That{' '}
            <span className="italic text-gradient">Tell Your</span>
            <br />
            Story
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
            Discover an unparalleled collection of premium stock photography — hand-curated for
            designers, marketers, and storytellers who demand excellence.
          </p>

          {/* Search bar */}
          <div className="flex items-center gap-3 glass rounded-xl p-2 max-w-lg">
            <Search className="w-5 h-5 text-neutral-500 ml-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search mountains, portraits, architecture…"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-600 outline-none"
            />
            <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex-shrink-0">
              Search
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs text-neutral-400"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1494790108755-2616b6dc2e4c?w=36&h=36&fit=crop&face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=36&h=36&fit=crop&face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&face',
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-neutral-900 overflow-hidden relative"
                >
                  <Image src={src} alt="User" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm text-neutral-400">
              <span className="text-white font-semibold">340K+ creatives</span> trust LensVault
            </div>
          </div>
        </div>

        {/* Right: masonry grid */}
        <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-[580px] animate-scale-in">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`${img.className} relative rounded-2xl overflow-hidden group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-white/40" />
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
