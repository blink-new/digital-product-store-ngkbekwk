
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products } from '../data/products';
import { useCartStore } from '../store/cart';
import { formatCurrency } from '../lib/utils';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === id));
  const [isInCart, setIsInCart] = useState(false);
  
  const { items, addItem } = useCartStore();
  
  useEffect(() => {
    setProduct(products.find(p => p.id === id));
  }, [id]);
  
  useEffect(() => {
    setIsInCart(items.some(item => item.product.id === id));
  }, [items, id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
        <Button className="mt-6" asChild>
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Link
          to="/products"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg border"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p className="mt-2 text-2xl font-medium">{formatCurrency(product.price)}</p>
            </div>
            
            <div className="space-y-2">
              <h2 className="font-medium">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div className="space-y-2">
              <h2 className="font-medium">Category</h2>
              <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full"
              onClick={() => addItem(product)}
              disabled={isInCart}
            >
              {isInCart ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
            
            {isInCart && (
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/cart">
                  View Cart
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}