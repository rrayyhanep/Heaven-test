export const roomData: Record<string, {
  name: string
  description: string
  productIds: number[]
}> = {
  'living-room': {
    name: 'Living Room',
    description: 'Create a cozy and inviting living space with our carefully curated collection of sofas, coffee tables, and accent pieces.',
    productIds: [1, 3, 6],
  },
  'dining-room': {
    name: 'Dining Room',
    description: 'Elegant dining experiences for every occasion. From intimate dinners to grand celebrations.',
    productIds: [2, 7, 8],
  },
  'bedroom': {
    name: 'Bedroom',
    description: 'Transform your bedroom into a peaceful retreat with our luxurious bed frames and storage solutions.',
    productIds: [4, 9, 10],
  },
  'office': {
    name: 'Office',
    description: 'Productive workspaces that inspire creativity. Functional and stylish office furniture solutions.',
    productIds: [5, 11, 12],
  },
}
