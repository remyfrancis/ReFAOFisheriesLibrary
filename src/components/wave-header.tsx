'use client'

import { useEffect, useRef } from 'react'

export function WaveHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = 400
    }

    const animate = () => {
      time += 0.005
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create multiple wave layers with different speeds and colors
      drawWave(ctx, time, canvas.width, canvas.height, '#1e40af', 0.5, 100)
      drawWave(ctx, time * 0.8, canvas.width, canvas.height, '#2563eb', 0.3, 150)
      drawWave(ctx, time * 1.2, canvas.width, canvas.height, '#3b82f6', 0.4, 200)

      animationFrameId = requestAnimationFrame(animate)
    }

    const drawWave = (
      ctx: CanvasRenderingContext2D,
      time: number,
      width: number,
      height: number,
      color: string,
      amplitude: number,
      y: number
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, height)

      for (let x = 0; x < width; x++) {
        const y1 = Math.sin(x * 0.01 + time) * amplitude * 50 + y
        ctx.lineTo(x, y1)
      }

      ctx.lineTo(width, height)
      ctx.fillStyle = color
      ctx.fill()
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full" />
}

