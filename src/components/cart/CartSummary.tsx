
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { useCartStore } from '../../store/cart';
import { formatCurrency } from '../../lib/utils';

export function CartSummary() {
  const { items, totalPrice } = useCartStore();
  const subtotal = totalPrice();
  const shipping = 0; // Digital products have no shipping
  const total = subtotal;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border bg-card p-6"
    >
      <h2 className="text-lg font-medium">Order Summary</h2>
      
      <div className="mt-4 space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
      
      <Button
        className="mt-6 w-full"
        size="lg"
        disabled={items.length === 0}
        asChild
      >
        <Link to="/checkout">
          Proceed to Checkout
        </Link>
      </Button>
      
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Secure checkout powered by Stripe
      </p>
    </motion.div>
  );
}