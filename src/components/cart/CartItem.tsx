
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cart';
import { formatCurrency } from '../../lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { product, quantity } = item;
  const { updateQuantity, removeItem } = useCartStore();
  
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="h-16 w-16 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium">{product.title}</h3>
        <p className="text-sm text-muted-foreground">{formatCurrency(product.price)}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(product.id, quantity - 1)}
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(product.id, quantity + 1)}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
      
      <div className="w-20 text-right font-medium">
        {formatCurrency(product.price * quantity)}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive"
        onClick={() => removeItem(product.id)}
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Remove item</span>
      </Button>
    </div>
  );
}