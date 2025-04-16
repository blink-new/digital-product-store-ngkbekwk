
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  downloadUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  purchases: Purchase[];
}

export interface Purchase {
  id: string;
  productId: string;
  purchaseDate: Date;
  downloadUrl: string;
}