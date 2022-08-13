const generateWaves = (durationMS: number): number[] => {
  const waves: number[] = Array.from({ length: Math.round(durationMS / 1000) })
  for (let i = 0; i < waves.length; i += 1) {
    waves[i] = Math.round((Math.sin(i / 10) + 1) * 30)
  }
  return waves
}

export { generateWaves }
