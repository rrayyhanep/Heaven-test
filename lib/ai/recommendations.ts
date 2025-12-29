import { Product } from '@/data/products';

// 1. Category similarity
const getCategoryScore = (productA: Product, productB: Product): number => {
  return productA.category === productB.category ? 5 : 0;
};

// 2. Type similarity
const getTypeScore = (productA: Product, productB: Product): number => {
  if (productA.type && productB.type && productA.type === productB.type) {
    return 3;
  }
  return 0;
};

// 3. Material similarity
const getMaterialScore = (productA: Product, productB: Product): number => {
  if (productA.materialOptions && productB.materialOptions) {
    const commonMaterials = productA.materialOptions.filter(material =>
      productB.materialOptions?.includes(material)
    );
    return commonMaterials.length * 2;
  }
  return 0;
};

// 4. Color similarity
const getColorScore = (productA: Product, productB: Product): number => {
  if (productA.colorOptions && productB.colorOptions) {
    const commonColors = productA.colorOptions.filter(color =>
      productB.colorOptions?.includes(color)
    );
    return commonColors.length;
  }
  return 0;
};

// 5. Name similarity (simple keyword matching)
const getNameScore = (productA: Product, productB: Product): number => {
  const nameAWords = new Set(productA.name.toLowerCase().split(' '));
  const nameBWords = new Set(productB.name.toLowerCase().split(' '));
  const commonNameWords = Array.from(nameAWords).filter(word => nameBWords.has(word));
  return commonNameWords.length;
};

// Function to calculate overall similarity score between two products
const calculateSimilarity = (productA: Product, productB: Product): number => {
  let score = 0;
  score += getCategoryScore(productA, productB);
  score += getTypeScore(productA, productB);
  score += getMaterialScore(productA, productB);
  score += getColorScore(productA, productB);
  score += getNameScore(productA, productB);
  return score;
};

// Function to get recommended products based on similarity
export const getRecommendedProducts = (currentProduct: Product, allProducts: Product[]): Product[] => {
  if (!currentProduct) {
    return [];
  }

  const scoredProducts = allProducts
    .filter(p => p.id !== currentProduct.id) // Exclude the product itself
    .map(product => ({
      product,
      score: calculateSimilarity(currentProduct, product),
    }));

  // Sort by score in descending order
  const sortedProducts = scoredProducts.sort((a, b) => b.score - a.score);

  // Return the product objects
  return sortedProducts.map(sp => sp.product);
};