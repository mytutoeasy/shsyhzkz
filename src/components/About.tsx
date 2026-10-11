'use client'

import Image from 'next/image'
import { Shield, Globe, Headphones, Palette } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Licensing',
    description:
      'Legally protected, royalty-free licenses covering commercial and editorial use worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Serving 190+ countries with localized payment methods, currencies, and support.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our team of creative professionals is available 24/7 to help you find the perfect shot.',
  },
  {
    icon: Palette,
    title: 'Creative Tools',
    description:
      'Built-in color adjustment, cropping, and format conversion — edit before you download.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: image collage */}
        <div className="relative h-[520px] hidden lg:block">
          <div className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=500&fit=crop"
              alt="Aurora"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
          <div className="absolute top-12 right-0 w-56 h-64 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop"
              alt="Forest"
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
          <div className="absolute bottom-0 left-24 w-72 h-56 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=450&h=350&fit=crop"
              alt="Cafe"
              fill
              className="object-cover"
              sizes="288px"
            />
          </div>
          {/* Floating card */}
          <div className="absolute top-40 left-40 glass rounded-xl p-4 shadow-2xl">
            <div className="text-2xl font-bold font-serif">18K+</div>
            <div className="text-xs text-neutral-400 mt-0.5">Photographers worldwide</div>
          </div>
        </div>

        {/* Right: text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">
              About LensVault
            </p>
            <h2 className="font-serif text-5xl font-bold leading-tight">
              Built for Creatives,{' '}
              <span className="italic text-gradient">By Creatives</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Founded in 2018 by a team of photographers and designers, LensVault was born from
              frustration with cluttered, mediocre stock sites. We built the platform we always
              wanted — ruthlessly curated, beautifully organized, and priced fairly.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Every image in our library passes through a rigorous 7-point quality review covering
              technical excellence, creative uniqueness, and commercial applicability.
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="space-y-2">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-white w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-sm">{title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
