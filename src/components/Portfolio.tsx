'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, Heart, X, ZoomIn, Tag, Camera } from 'lucide-react'
import { photos, type Photo } from '@/lib/data'

const allCategories = ['All', 'Nature', 'Architecture', 'People', 'Business', 'Lifestyle']

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: (p: Photo) => void }) {
  const [liked, setLiked] = useState(false)

  return (
    <div
      className="relative group rounded-xl overflow-hidden cursor-pointer bg-neutral-900"
      onClick={() => onClick(photo)}
    >
      <div className="relative w-full" style={{ paddingBottom: `${(photo.height / photo.width) * 100}%` }}>
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 inset-x-0 p-4 space-y-2">
          <h3 className="text-white font-semibold text-sm">{photo.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-neutral-400 text-xs">{photo.resolution}</span>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
              onClick={(e) => { e.stopPropagation() }}
            >
              <Download className="w-3.5 h-3.5" />
              License
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${liked ? 'bg-red-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
              onClick={(e) => { e.stopPropagation(); setLiked(!liked) }}
            >
              <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured badge */}
      {photo.featured && (
        <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 text-black text-xs font-semibold rounded-full">
          Featured
        </div>
      )}
    </div>
  )
}

function LightboxModal({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-neutral-900/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-neutral-800 rounded-2xl overflow-hidden border border-white/5 flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative lg:w-3/5 aspect-[4/3] lg:aspect-auto">
          <Image
            src={photo.src.replace('w=800', 'w=1200')}
            alt={photo.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Info panel */}
        <div className="lg:w-2/5 p-8 flex flex-col justify-between">
          <div>
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-full text-xs text-neutral-400 mb-4">
              <Camera className="w-3 h-3" />
              {photo.category}
            </div>
            <h2 className="font-serif text-2xl font-bold mb-3">{photo.title}</h2>
            <p className="text-neutral-400 text-sm mb-6">
              High-resolution stock photo available for commercial and editorial licensing. Perfect
              for web, print, and advertising campaigns.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Resolution</span>
                <span className="text-white">{photo.resolution}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Downloads</span>
                <span className="text-white">{photo.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">License</span>
                <span className="text-white">Royalty-free</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {photo.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-neutral-400"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors">
              <Download className="w-4 h-4" />
              License This Photo
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
              <ZoomIn className="w-4 h-4" />
              Preview Full Size
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const filtered =
    activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">Portfolio</p>
          <h2 className="font-serif text-5xl font-bold">
            Curated <span className="italic text-gradient">Collections</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Each image is hand-selected by our editorial team for exceptional quality, composition,
            and commercial potential.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((photo) => (
            <div key={photo.id} className="break-inside-avoid">
              <PhotoCard photo={photo} onClick={setSelectedPhoto} />
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-16">
          <button className="px-8 py-3.5 glass rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-200">
            Load More Photos
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <LightboxModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </section>
  )
}
