import ProductsPageComponent from '@/components/ProductsPage'
import { products } from '@/data/products'

export default function ProductsPage() {
  return <ProductsPageComponent products={products} />
}
