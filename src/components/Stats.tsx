'use client'

import { stats } from '@/lib/data'

export default function Stats() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                {stat.value}
                <span className="text-neutral-400">{stat.suffix}</span>
              </div>
              <div className="text-neutral-500 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
