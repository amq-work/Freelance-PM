import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  targetX: number
  targetY: number
}

export function useParticles(containerRef: React.RefObject<HTMLDivElement>, isActive: boolean = true) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const dimensionsRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current || !isActive) return

    const container = containerRef.current
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '5'
    container.style.position = 'relative'
    container.style.overflow = 'hidden'
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    container.insertBefore(canvas, container.firstChild)
    canvasRef.current = canvas

    const resize = () => {
      const rect = container.getBoundingClientRect()
      dimensionsRef.current = { width: rect.width, height: rect.height }
      canvas.width = rect.width
      canvas.height = rect.height
      
      // Initialize particles
      const particleCount = Math.min(80, Math.floor((rect.width * rect.height) / 15000))
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 2 + Math.random() * 4,
          alpha: 0.2 + Math.random() * 0.5,
          targetX: Math.random() * rect.width,
          targetY: Math.random() * rect.height,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', resize)
    resize()

    const animate = () => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height)
      
      particlesRef.current.forEach((p) => {
        // Mouse attraction logic
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x
          const dy = mouseRef.current.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            const force = (1 - distance / 150) * 0.02
            p.vx += dx * force
            p.vy += dy * force
          }
        }
        
        // Damping
        p.vx *= 0.98
        p.vy *= 0.98
        
        // Update position
        p.x += p.vx
        p.y += p.vy
        
        // Boundary wrap
        if (p.x < 0) p.x = dimensionsRef.current.width
        if (p.x > dimensionsRef.current.width) p.x = 0
        if (p.y < 0) p.y = dimensionsRef.current.height
        if (p.y > dimensionsRef.current.height) p.y = 0
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        
        // Blue gradient based on mouse distance
        let hue = 210
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x
          const dy = mouseRef.current.y - p.y
          const distToMouse = Math.sqrt(dx * dx + dy * dy)
          if (distToMouse < 100) {
            hue = 280 // Purple glow when near mouse
          }
        }
        
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${p.alpha})`
        ctx.fill()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', resize)
      if (canvas && container.contains(canvas)) {
        container.removeChild(canvas)
      }
    }
  }, [containerRef, isActive])
}