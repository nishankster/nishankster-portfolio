'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  src: string
  alt: string
  category: string
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All'].concat(Array.from(new Set(photos.map(p => p.category))))

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos
          .filter(p => activeCategory === 'All' || p.category === activeCategory)
          .map(photo => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
      </div>
    </div>
  )
}