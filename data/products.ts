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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
  {
    id: 13,
    name: 'Modern Accent Chair',
    category: 'Living Room',
    type: 'Chair',
    description: 'A stylish accent chair to elevate your living space.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Accent Chair')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/AccentChair.glb',
    featured: false,
    price: '$349'
  },
  {
    id: 14,
    name: 'Glass Coffee Table',
    category: 'Living Room',
    type: 'Coffee Table',
    description: 'Sleek and modern glass coffee table.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Glass Coffee Table')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/GlassCoffeeTable.glb',
    featured: false,
    price: '$299'
  },
  {
    id: 15,
    name: 'Sectional Sofa',
    category: 'Living Room',
    type: 'Sofa',
    description: 'A large, comfortable sectional sofa for the whole family.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Sectional Sofa')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/SectionalSofa.glb',
    featured: false,
    price: '$1,499'
  },
  {
    id: 16,
    name: 'TV Stand',
    category: 'Living Room',
    type: 'Entertainment Center',
    description: 'A modern TV stand with ample storage.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('TV Stand')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/TVStand.glb',
    featured: false,
    price: '$499'
  },
  {
    id: 17,
    name: 'End Table',
    category: 'Living Room',
    type: 'Table',
    description: 'A stylish end table to complement your sofa.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('End Table')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/EndTable.glb',
    featured: false,
    price: '$149'
  },
  {
    id: 18,
    name: 'Recliner',
    category: 'Living Room',
    type: 'Chair',
    description: 'A comfortable recliner for ultimate relaxation.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Recliner')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Recliner.glb',
    featured: false,
    price: '$599'
  },
  {
    id: 19,
    name: 'Dining Bench',
    category: 'Dining Room',
    type: 'Bench',
    description: 'A rustic dining bench to go with your dining table.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Dining Bench')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/DiningBench.glb',
    featured: false,
    price: '$249'
  },
  {
    id: 20,
    name: 'Bar Stool',
    category: 'Dining Room',
    type: 'Chair',
    description: 'A modern bar stool for your kitchen island.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Bar Stool')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/BarStool.glb',
    featured: false,
    price: '$129'
  },
  {
    id: 21,
    name: 'Sideboard',
    category: 'Dining Room',
    type: 'Cabinet',
    description: 'A stylish sideboard for extra storage in your dining room.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Sideboard')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Sideboard.glb',
    featured: false,
    price: '$799'
  },
  {
    id: 22,
    name: 'Kitchen Island',
    category: 'Dining Room',
    type: 'Table',
    description: 'A functional kitchen island with extra counter space.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Kitchen Island')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/KitchenIsland.glb',
    featured: false,
    price: '$999'
  },
  {
    id: 23,
    name: 'Pendant Light',
    category: 'Dining Room',
    type: 'Lighting',
    description: 'A modern pendant light to illuminate your dining area.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Pendant Light')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/PendantLight.glb',
    featured: false,
    price: '$199'
  },
  {
    id: 24,
    name: 'Dresser',
    category: 'Bedroom',
    type: 'Storage',
    description: 'A spacious dresser with multiple drawers.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Dresser')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Dresser.glb',
    featured: false,
    price: '$699'
  },
  {
    id: 25,
    name: 'Chest of Drawers',
    category: 'Bedroom',
    type: 'Storage',
    description: 'A tall chest of drawers for extra storage.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Chest of Drawers')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/ChestOfDrawers.glb',
    featured: false,
    price: '$499'
  },
  {
    id: 26,
    name: 'Makeup Vanity',
    category: 'Bedroom',
    type: 'Table',
    description: 'A stylish makeup vanity with a mirror and drawers.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Makeup Vanity')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/MakeupVanity.glb',
    featured: false,
    price: '$399'
  },
  {
    id: 27,
    name: 'Bunk Bed',
    category: 'Bedroom',
    type: 'Bed',
    description: 'A space-saving bunk bed for kids.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Bunk Bed')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/BunkBed.glb',
    featured: false,
    price: '$799'
  },
  {
    id: 28,
    name: 'Gaming Chair',
    category: 'Office',
    type: 'Chair',
    description: 'An ergonomic gaming chair for long gaming sessions.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Gaming Chair')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/GamingChair.glb',
    featured: false,
    price: '$349'
  },
  {
    id: 29,
    name: 'Standing Desk',
    category: 'Office',
    type: 'Desk',
    description: 'An adjustable standing desk for a healthier workday.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Standing Desk')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/StandingDesk.glb',
    featured: false,
    price: '$499'
  },
  {
    id: 30,
    name: 'Filing Cabinet',
    category: 'Office',
    type: 'Storage',
    description: 'A filing cabinet to keep your documents organized.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Filing Cabinet')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/FilingCabinet.glb',
    featured: false,
    price: '$249'
  },
  {
    id: 31,
    name: 'Floor Lamp',
    category: 'Living Room',
    type: 'Lighting',
    description: 'A stylish floor lamp to brighten up your living room.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Floor Lamp')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/FloorLamp.glb',
    featured: false,
    price: '$129'
  },
  {
    id: 32,
    name: 'Area Rug',
    category: 'Living Room',
    type: 'Rug',
    description: 'A soft and stylish area rug.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Area Rug')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/AreaRug.glb',
    featured: false,
    price: '$199'
  },
  {
    id: 33,
    name: 'Wall Art',
    category: 'Living Room',
    type: 'Decor',
    description: 'A beautiful piece of wall art to decorate your home.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Wall Art')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/WallArt.glb',
    featured: false,
    price: '$99'
  },
  {
    id: 34,
    name: 'Throw Pillow',
    category: 'Living Room',
    type: 'Decor',
    description: 'A comfortable and stylish throw pillow.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Throw Pillow')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/ThrowPillow.glb',
    featured: false,
    price: '$29'
  },
  {
    id: 35,
    name: 'Curtains',
    category: 'Living Room',
    type: 'Decor',
    description: 'A set of elegant curtains.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Curtains')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Curtains.glb',
    featured: false,
    price: '$79'
  },
  {
    id: 36,
    name: 'Vase',
    category: 'Living Room',
    type: 'Decor',
    description: 'A beautiful vase for your flowers.',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Vase')}`,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/items/Vase.glb',
    featured: false,
    price: '$49'
  }
]
