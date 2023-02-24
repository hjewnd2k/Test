export interface Product {
  id: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
}

export interface IPage {
  limit: number;
  skip: number;
}
