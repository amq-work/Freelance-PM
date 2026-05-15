import React, { useRef } from 'react'
import { useParticles } from '../hooks/useParticles'

interface ParticleBackgroundProps {
  children: React.ReactNode
  className?: string
  active?: boolean
}

export function ParticleBackground({ children, className = '', active = true }: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useParticles(containerRef as React.RefObject<HTMLDivElement>, active)
  
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  )
}