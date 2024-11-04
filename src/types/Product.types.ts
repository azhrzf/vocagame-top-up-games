export interface Item {
  id: string;
  name: string;
  price: number;
  priceDiscount: number;
  iconUrl: string;
}

export interface ProductMeta {
  id: string;
  name: string;
  image: string;
  publisher: string;
  description: string;
  category: string;
  createdAt: Date;
}

export interface ProductItem extends ProductMeta {
  item: Item;
}

export interface Product extends ProductMeta {
  items: Item[];
}
