
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { useCartStore } from '../store/cart';

export function CartPage() {
  const { items, clearCart } = useCartStore();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
          <p className="mt-2 text-muted-foreground">
            Review and manage your selected items
          </p>
        </div>
        
        {items.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <div className="md:col-span-2">
              <div className="rounded-lg border">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-medium">
                      {items.length} {items.length === 1 ? 'Item' : 'Items'}
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    {items.map((item) => (
                      <CartItem key={item.product.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link to="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
            
            <div>
              <CartSummary />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border bg-card p-12 text-center max-w-2xl mx-auto"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-medium">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button className="mt-6" asChild>
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}