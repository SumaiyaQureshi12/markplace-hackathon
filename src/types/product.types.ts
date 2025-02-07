export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  [x: string]: string | StaticImport;
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
  category: number;
};
