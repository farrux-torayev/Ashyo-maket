import { HeaderCategoriesType } from "./HeaderButtonType";

export interface ProductsType {
  id: number;
  name: string;
  is_liked: boolean;
  category_id: string;
  description: string;
  nasiya: string | number;
  summary: string;
  price: number;
  rating: number;
  is_aksiya: boolean;
  brand_id: number;
  image: string;
  createdAt: "2025-04-26T11:10:08.236Z";
  updatedAt: "2025-04-26T11:10:08.236Z";
  comments: any;
  like: any;
  category: HeaderCategoriesType;
  product_item: any
}
