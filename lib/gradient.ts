export function createGradientDataUrl(
  width: number, 
  height: number, 
  direction: 'horizontal' | 'vertical' | 'diagonal' = 'diagonal', 
  ...colors: string[]
): string {
  if (typeof window === 'undefined') {
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Could not get canvas context')
  }

  let gradient:
    | CanvasGradient
    | ConicGradient
    | CanvasPattern
    | CanvasRenderingContext2D['fillStyle']

  switch (direction) {
    case 'horizontal':
      gradient = ctx.createLinearGradient(0, 0, width, 0)
      break
    case 'vertical':
      gradient = ctx.createLinearGradient(0, 0, 0, height)
      break
    case 'diagonal':
    default:
      gradient = ctx.createLinearGradient(0, 0, width, height)
      break
  }
  
  const step = 1 / (colors.length - 1)
  colors.forEach((color, i) => {
    if (gradient instanceof CanvasGradient) {
      gradient.addColorStop(i * step, color)
    }
  })

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL('image/png')
}
