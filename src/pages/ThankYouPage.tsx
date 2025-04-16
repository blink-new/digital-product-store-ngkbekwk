
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCartStore } from '../store/cart';

export function ThankYouPage() {
  const navigate = useNavigate();
  const { items } = useCartStore();
  
  // Redirect to home if accessed directly without checkout
  useEffect(() => {
    if (items.length > 0) {
      navigate('/checkout');
    }
  }, [items, navigate]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container max-w-2xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border bg-card p-8 text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="mt-6 text-3xl font-bold">Thank You for Your Purchase!</h1>
          <p className="mt-4 text-muted-foreground">
            Your order has been successfully processed. You will receive a confirmation email shortly.
          </p>
          
          <div className="mt-8 space-y-4">
            <h2 className="font-medium">Your Digital Products</h2>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <p>Your purchased items are ready for download</p>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download All
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <p className="text-sm text-muted-foreground">
              You can also access your purchases anytime from your account dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/account">
                  Go to My Account
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  Continue Shopping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}