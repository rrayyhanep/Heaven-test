# Heaven Furniture Website

A modern, elegant product showcasing website for Heaven Furniture built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern UI design using the Heaven Furniture brand colors
- 📱 Fully responsive design for all devices
- 🛋️ Product showcase with category filtering
- 🏠 Homepage with hero section and featured content
- 📄 About and Contact pages
- ⚡ Fast and optimized with Next.js 14

## Color Palette

The website uses the Heaven Furniture logo color scheme:
- **Dark Teal**: `#1a4d4d` - Primary dark color
- **Teal**: `#2d6a6a` - Primary color
- **Light Teal**: `#3d8a8a` - Accent color
- **Light Blue**: `#7dd3f0` - Highlight color
- **Blue**: `#5bb8d4` - Secondary accent

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
heaven-furniture/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── products/            # Products page
│   ├── about/               # About page
│   └── contact/             # Contact page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── FeaturedSection.tsx  # Features section
│   ├── ProductShowcase.tsx  # Product showcase with filtering
│   └── ProductCard.tsx      # Individual product card
└── public/                  # Static assets (add your images here)
```

## Customization

### Adding Products

Edit the `products` array in `components/ProductShowcase.tsx` to add your own products. Each product should have:
- `id`: Unique identifier
- `name`: Product name
- `category`: Product category
- `description`: Product description
- `image`: Image URL (place images in `public/` folder)

### Updating Colors

Colors can be customized in `tailwind.config.js` under the `colors` section.

### Adding Images

1. Place your product images in the `public/` folder
2. Update the `image` property in product data to reference the image path (e.g., `/images/product1.jpg`)

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## License

This project is created for Heaven Furniture.

