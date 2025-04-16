
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ProductGrid } from '../products/ProductGrid';
import { products } from '../../data/products';

export function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">
              Our handpicked selection of premium digital products
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
}