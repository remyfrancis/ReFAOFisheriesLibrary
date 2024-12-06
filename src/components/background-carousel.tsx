'use client'

import { useEffect, useState } from 'react'

const images = [
  '/christian-lendl-P41tKN3uZhw-unsplash.jpg',
  '/fernando-jorge-2hnIyOA0Ovo-unsplash.jpg'
]

export function BackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
