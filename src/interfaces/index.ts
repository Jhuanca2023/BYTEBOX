export interface Review {
  name: string;
  time: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  reviews?: Review[];
  url: string;
}
