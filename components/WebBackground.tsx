'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function WebBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Create points for the web
    const pointCount = 60
    const spread = 90
    const positions: THREE.Vector3[] = []

    for (let i = 0; i < pointCount; i++) {
      positions.push(new THREE.Vector3(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * 30
      ))
    }

    // Generate circle texture for round nodes
    const circleCanvas = document.createElement('canvas')
    circleCanvas.width = 64
    circleCanvas.height = 64
    const ctx = circleCanvas.getContext('2d')!
    ctx.beginPath()
    ctx.arc(32, 32, 30, 0, Math.PI * 2)
    ctx.fillStyle = '#7C3AED'
    ctx.fill()
    const circleTexture = new THREE.CanvasTexture(circleCanvas)

    // Create dots at each point
    const dotGeometry = new THREE.BufferGeometry()
    const dotPositions = new Float32Array(pointCount * 3)
    for (let i = 0; i < pointCount; i++) {
      dotPositions[i * 3] = positions[i].x
      dotPositions[i * 3 + 1] = positions[i].y
      dotPositions[i * 3 + 2] = positions[i].z
    }
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3))

    const dotMaterial = new THREE.PointsMaterial({
      color: 0x7C3AED,
      size: 1.5,
      map: circleTexture,
      alphaMap: circleTexture,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
    })
    const dots = new THREE.Points(dotGeometry, dotMaterial)
    scene.add(dots)

    // Create lines connecting nearby points
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x7C3AED,
      transparent: true,
      opacity: 0.25,
    })

    const connectionDistance = 25
    const lineSegments: THREE.LineSegments[] = []

    const linePositions: number[] = []
    for (let i = 0; i < pointCount; i++) {
      for (let j = i + 1; j < pointCount; j++) {
        const dist = positions[i].distanceTo(positions[j])
        if (dist < connectionDistance) {
          linePositions.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          )
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    const lines = new THREE.LineSegments(lineGeometry, linesMaterial)
    scene.add(lines)

    // Store original positions for animation
    const originalPositions = positions.map(p => p.clone())
    const velocities = positions.map(() => new THREE.Vector3(
      (Math.random() - 0.5) * 0.008,
      (Math.random() - 0.5) * 0.008,
      (Math.random() - 0.5) * 0.003
    ))

    // Mouse interaction
    const mouse = new THREE.Vector2(0, 0)
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Slowly drift points
      const posAttr = dotGeometry.getAttribute('position') as THREE.BufferAttribute
      const lineAttr = lineGeometry.getAttribute('position') as THREE.BufferAttribute

      for (let i = 0; i < pointCount; i++) {
        positions[i].add(velocities[i])

        // Soft boundary
        const halfSpread = spread / 2
        if (Math.abs(positions[i].x) > halfSpread) velocities[i].x *= -1
        if (Math.abs(positions[i].y) > halfSpread) velocities[i].y *= -1
        if (Math.abs(positions[i].z) > 15) velocities[i].z *= -1

        posAttr.setXYZ(i, positions[i].x, positions[i].y, positions[i].z)
      }
      posAttr.needsUpdate = true

      // Rebuild line connections
      let lineIdx = 0
      for (let i = 0; i < pointCount; i++) {
        for (let j = i + 1; j < pointCount; j++) {
          const dist = positions[i].distanceTo(positions[j])
          if (dist < connectionDistance && lineIdx < linePositions.length / 6) {
            lineAttr.setXYZ(lineIdx * 2, positions[i].x, positions[i].y, positions[i].z)
            lineAttr.setXYZ(lineIdx * 2 + 1, positions[j].x, positions[j].y, positions[j].z)
            lineIdx++
          }
        }
      }
      lineAttr.needsUpdate = true

      // Subtle camera movement following mouse
      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 3 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)

      // Slow rotation
      dots.rotation.y += 0.0003
      lines.rotation.y += 0.0003

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      circleTexture.dispose()
      dotGeometry.dispose()
      dotMaterial.dispose()
      lineGeometry.dispose()
      linesMaterial.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none"
      aria-hidden="true"
    />
  )
}
