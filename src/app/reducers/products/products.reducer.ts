import * as ProductActions from './products.action';
// import { DisplayResultsState, ExamResults } from 'src/app/classes/interfaces/ExamResults';
import { ProductState } from './../../interface/ProductState';
import { createReducer, on } from '@ngrx/store';

const productsData: any[] = [];

const initState: ProductState = {
  productsData,
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
);
