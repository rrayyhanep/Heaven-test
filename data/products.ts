export interface Product {
  id: number
  name: string
  category: string
  description: string
  image: string
  modelSrc: string
  featured?: boolean
  type?: string
  material?: string
  dimensions?: string
  color?: string
  materialOptions?: string[]
  colorOptions?: string[]
  sizeOptions?: string[]
  features?: string[]
  price?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Luxury Sofa Set',
    category: 'Living Room',
    type: 'Sofa',
    description: 'Elegant three-piece sofa set with premium upholstery. Perfect for creating a sophisticated living space with unmatched comfort and style.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Luxury Sofa Set')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/LuxurySofa.glb',
    featured: true,
    material: 'Premium Fabric, Solid Wood Frame',
    dimensions: '84" W x 36" D x 34" H',
    color: 'Navy Blue, Beige, Charcoal, Red',
    materialOptions: ['Premium Fabric', 'Leather'],
    colorOptions: ['Navy Blue', 'Beige', 'Charcoal', 'Red'],
    sizeOptions: ['Small', 'Medium', 'Large'],
    features: [
      'Deep seating for maximum comfort',
      'Removable cushion covers',
      'Sturdy hardwood frame',
      'Premium foam padding',
      '5-year warranty'
    ],
    price: '$2,499'
  },
  {
    id: 2,
    name: 'Modern Dining Table',
    category: 'Dining Room',
    type: 'Dining Table',
    description: 'Contemporary dining table with sleek design. Ideal for both intimate dinners and large gatherings, combining functionality with modern aesthetics.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Modern Dining Table')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/DiningTable.glb',
    featured: true,
    material: 'Solid Oak Wood, Metal Legs',
    dimensions: '96" L x 42" W x 30" H',
    color: 'Natural Oak, Walnut, Black, White',
    materialOptions: ['Solid Oak', 'Walnut', 'Glass Top'],
    colorOptions: ['Natural Oak', 'Walnut', 'Black', 'White'],
    sizeOptions: ['4-Seater', '6-Seater', '8-Seater'],
    features: [
      'Seats up to 8 people',
      'Scratch-resistant surface',
      'Easy to clean',
      'Extendable option available',
      '10-year warranty'
    ],
    price: '$1,899'
  },
  {
    id: 3,
    name: 'Comfortable Armchair',
    category: 'Living Room',
    type: 'Armchair',
    description: 'Plush armchair perfect for reading and relaxation. Features ergonomic design and premium materials for ultimate comfort.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Comfortable Armchair')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Armchair.glb',
    featured: true,
    material: 'Leather, Hardwood Frame',
    dimensions: '32" W x 34" D x 40" H',
    color: 'Brown, Black, Gray, Cream',
    materialOptions: ['Leather', 'Fabric', 'Velvet'],
    colorOptions: ['Brown', 'Black', 'Gray', 'Cream'],
    sizeOptions: ['Standard', 'Oversized'],
    features: [
      'Ergonomic design',
      'High-quality leather',
      'Swivel base option',
      'Memory foam cushioning',
      '7-year warranty'
    ],
    price: '$899'
  },
  {
    id: 4,
    name: 'Elegant Bed Frame',
    category: 'Bedroom',
    type: 'Bed Frame',
    description: 'Stylish bed frame with modern aesthetics. Creates a luxurious bedroom atmosphere with its elegant design and premium construction.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Elegant Bed Frame')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/BedFrame.glb',
    featured: true,
    material: 'Solid Wood, Metal Accents',
    dimensions: 'King: 80" W x 84" L, Queen: 64" W x 84" L',
    color: 'Espresso, White, Natural Wood, Gray',
    materialOptions: ['Solid Wood', 'Upholstered', 'Metal Frame'],
    colorOptions: ['Espresso', 'White', 'Natural Wood', 'Gray'],
    sizeOptions: ['Queen', 'King', 'California King'],
    features: [
      'Available in multiple sizes',
      'Under-bed storage option',
      'Slat support system',
      'Easy assembly',
      '15-year warranty'
    ],
    price: '$1,299'
  },
  {
    id: 5,
    name: 'Office Desk',
    category: 'Office',
    type: 'Desk',
    description: 'Functional and stylish workspace solution. Designed for productivity with ample storage and modern design.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Office Desk')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/OfficeDesk.glb',
    featured: true,
    material: 'Engineered Wood, Metal Frame',
    dimensions: '60" W x 30" D x 30" H',
    color: 'White, Oak, Walnut, Black',
    materialOptions: ['Engineered Wood', 'Solid Wood', 'Glass Top'],
    colorOptions: ['White', 'Oak', 'Walnut', 'Black'],
    sizeOptions: ['48-inch', '60-inch', '72-inch'],
    features: [
      'Built-in cable management',
      'Drawer storage',
      'Adjustable height option',
      'Ergonomic design',
      '5-year warranty'
    ],
    price: '$599'
  },
  {
    id: 6,
    name: 'Coffee Table',
    category: 'Living Room',
    type: 'Coffee Table',
    description: 'Contemporary coffee table with storage. Combines style and functionality with hidden storage compartments.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Coffee Table')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/CoffeeTable.glb',
    material: 'Glass Top, Wood Base',
    dimensions: '48" L x 24" W x 18" H',
    color: 'Clear Glass, Oak Base, Walnut Base, Black',
    materialOptions: ['Glass Top', 'Marble Top', 'Solid Wood'],
    colorOptions: ['Clear Glass', 'Oak Base', 'Walnut Base', 'Black'],
    sizeOptions: ['Small', 'Large'],
    features: [
      'Hidden storage drawer',
      'Tempered glass top',
      'Sturdy construction',
      'Easy to move',
      '3-year warranty'
    ],
    price: '$399'
  },
  {
    id: 7,
    name: 'Dining Chair Set',
    category: 'Dining Room',
    type: 'Dining Chair',
    description: 'Comfortable and stylish dining chairs. Perfect complement to any dining table with ergonomic design.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Dining Chair Set')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/DiningChair.glb',
    material: 'Upholstered Seat, Wood Legs',
    dimensions: '20" W x 22" D x 38" H',
    color: 'Gray, Beige, Navy, Black',
    materialOptions: ['Upholstered', 'Leather', 'Wood'],
    colorOptions: ['Gray', 'Beige', 'Navy', 'Black'],
    sizeOptions: ['Set of 2', 'Set of 4', 'Set of 6'],
    features: [
      'Set of 4 or 6 available',
      'Padded seat cushion',
      'Sturdy construction',
      'Easy to clean',
      '5-year warranty'
    ],
    price: '$299'
  },
  {
    id: 8,
    name: 'Buffet Cabinet',
    category: 'Dining Room',
    type: 'Cabinet',
    description: 'Elegant storage solution for your dining room. Provides ample space for dinnerware and linens.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Buffet Cabinet')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/BuffetCabinet.glb',
    material: 'Solid Wood, Glass Doors',
    dimensions: '72" W x 20" D x 36" H',
    color: 'Cherry, Oak, White, Black',
    materialOptions: ['Solid Wood', 'MDF'],
    colorOptions: ['Cherry', 'Oak', 'White', 'Black'],
    sizeOptions: ['Standard', 'Large'],
    features: [
      'Glass-front doors',
      'Adjustable shelves',
      'Drawer storage',
      'Soft-close hinges',
      '10-year warranty'
    ],
    price: '$1,199'
  },
  {
    id: 9,
    name: 'Nightstand',
    category: 'Bedroom',
    type: 'Nightstand',
    description: 'Modern nightstand with drawer storage. Perfect bedside companion for your bedroom.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Nightstand')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Nightstand.glb',
    material: 'Wood, Metal Hardware',
    dimensions: '20" W x 16" D x 26" H',
    color: 'White, Oak, Walnut, Black',
    materialOptions: ['Wood', 'MDF'],
    colorOptions: ['White', 'Oak', 'Walnut', 'Black'],
    sizeOptions: ['Standard'],
    features: [
      'Drawer storage',
      'Open shelf',
      'Compact design',
      'Easy assembly',
      '5-year warranty'
    ],
    price: '$249'
  },
  {
    id: 10,
    name: 'Wardrobe',
    category: 'Bedroom',
    type: 'Wardrobe',
    description: 'Spacious wardrobe with multiple compartments. Organize your clothing with style and efficiency.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Wardrobe')}`,
    modelSrc: 'https://sketchfab.com/models/e48bb01993c7464ea09a02465c87d25d/embed',
    material: 'Engineered Wood, Metal Hardware',
    dimensions: '48" W x 24" D x 72" H',
    color: 'White, Gray, Brown, Black',
    materialOptions: ['Engineered Wood', 'Solid Wood'],
    colorOptions: ['White', 'Gray', 'Brown', 'Black'],
    sizeOptions: ['Standard', 'Tall', 'Wide'],
    features: [
      'Multiple shelves',
      'Hanging rod',
      'Drawer storage',
      'Mirror door option',
      '10-year warranty'
    ],
    price: '$899'
  },
  {
    id: 11,
    name: 'Office Chair',
    category: 'Office',
    type: 'Chair',
    description: 'Ergonomic office chair for long work sessions. Designed for comfort and productivity.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Office Chair')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/OfficeChair.glb',
    material: 'Mesh Back, Leather Seat',
    dimensions: '26" W x 26" D x 40-44" H',
    color: 'Black, Gray, Blue, Red',
    materialOptions: ['Mesh Back', 'Leather', 'Fabric'],
    colorOptions: ['Black', 'Gray', 'Blue', 'Red'],
    sizeOptions: ['Standard', 'Big & Tall'],
    features: [
      'Adjustable height',
      'Lumbar support',
      '360-degree swivel',
      'Armrests included',
      '5-year warranty'
    ],
    price: '$449'
  },
  {
    id: 12,
    name: 'Bookshelf',
    category: 'Office',
    type: 'Shelving',
    description: 'Stylish bookshelf for your office or living room. Display your books and decor with elegance.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Bookshelf')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Bookshelf.glb',
    material: 'Solid Wood',
    dimensions: '36" W x 12" D x 72" H',
    color: 'Oak, Walnut, White, Black',
    materialOptions: ['Solid Wood', 'MDF', 'Metal'],
    colorOptions: ['Oak', 'Walnut', 'White', 'Black'],
    sizeOptions: ['3-Shelf', '4-Shelf', '5-Shelf'],
    features: [
      '5 adjustable shelves',
      'Open design',
      'Sturdy construction',
      'Easy assembly',
      '7-year warranty'
    ],
    price: '$349'
  },
]
