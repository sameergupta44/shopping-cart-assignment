import * as ProductActions from './products.action';
import { ProductState } from './../../interface/ProductState';
import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/interface/Category';

const productsData: any[] = [];
const categoriesData: Category[] = [];
const filter: Category[] = [];

const initState: ProductState = {
  productsData,
  categoriesData,
  filter,
};

export const reducer = createReducer(
  initState,
  on(ProductActions.LoadProductResultsComplete, (state: ProductState, data: any) => {
    return {
      ...state,
      productsData: data.payload
    };
  }),
  on(ProductActions.LoadProductResults, (state: ProductState) => state),
  on(ProductActions.LoadCategoryResultsComplete, (state: ProductState, data: any) => {
    return {
      ...state,
      categoriesData: data.payload
    };
  }),
  on(ProductActions.LoadCategoryResults, (state: ProductState) => state),
  on(ProductActions.ApplyFilter, (state: ProductState, data: any) => {
    const index = state.filter.findIndex(obj => obj.id === data.payload.id);
    console.log('ApplyFilter:' + index);
    if (index === -1) {
      return {
        ...state,
        filter: [...state.filter, data.payload]
      };
    }
    // remove if already exists
    return {
      ...state,
      filter: state.filter.filter(o => {
        if (o.id !== data.payload.id) {
          return true;  // keep item
        }
        return false; // remove item
      })
    };
  })
);
