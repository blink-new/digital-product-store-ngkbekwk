
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { useCartStore } from '../store/cart';
import { formatCurrency } from '../lib/utils';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Placeholder for checkout form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // In a real app, this would be where you'd integrate with Stripe
      clearCart();
      navigate('/thank-you');
    }, 1500);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
          <p className="mt-2 text-muted-foreground">
            Complete your purchase
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="rounded-lg border p-6">
              <h2 className="font-medium">Order Summary</h2>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.product.title}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p>{formatCurrency(item.product.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formatCurrency(totalPrice())}</span>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="font-medium">Contact Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h2 className="font-medium">Payment Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      name="cvc"
                      placeholder="123"
                      value={formData.cvc}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Complete Purchase'}
              </Button>
              
              <p className="text-center text-xs text-muted-foreground">
                Your payment information is secure. We use encryption to protect your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}