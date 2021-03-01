import { Category } from './Category';

export interface ProductState {
  productsData: any[];
  categoriesData: Category[];
  filter: Category[];
}
