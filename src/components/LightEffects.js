import React, { useEffect, useState } from 'react';

const generateEffects = (count) => {
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    size: Math.random() * 2 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    blur: Math.random() * 8 + 2,
    streakLength: Math.random() * 10 + 5,
  }))
}

export default function LightEffects() {
  const [effects, setEffects] = useState(generateEffects(40))

  useEffect(() => {
    const interval = setInterval(() => {
      setEffects(generateEffects(40))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {effects.map((effect) => (
        <div
          key={effect.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            width: effect.size,
            height: effect.size,
            left: `${effect.x}%`,
            top: `${effect.y}%`,
            opacity: effect.opacity,
            filter: `blur(${effect.blur}px)`,
            boxShadow: `0 0 ${effect.streakLength}px rgba(0, 255, 255, 0.6)`,
          }}
        />
      ))}
    </div>
  )
}

