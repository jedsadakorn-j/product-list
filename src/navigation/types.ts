import type { Product } from '../models/Product';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};
