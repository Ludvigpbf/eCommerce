export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  pricePerUnit?: string;
  minOrder?: number;
  packSize?: number;
  stock: number;
  image?: string;
  category?: string;
  brand?: string;
  rating?: number;
}
