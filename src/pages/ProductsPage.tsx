
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductGrid } from '../components/products/ProductGrid';
import { CategoryFilter } from '../components/products/CategoryFilter';
import { products } from '../data/products';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);
  
  const handleCategorySelect = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Digital Products</h1>
          <p className="mt-2 text-muted-foreground">
            Browse our collection of premium digital products
          </p>
        </div>
        
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        
        <ProductGrid products={products} category={selectedCategory} />
      </div>
    </motion.div>
  );
}