import { Action, createAction, props, union } from '@ngrx/store';

export const LOAD_PRODUCT_RESULTS = '[PRODUCT_RESULTS] LOAD_PRODUCT_RESULTS';
export const LOAD_PRODUCT_RESULTS_COMPLETE = '[PRODUCT_RESULTS] LOAD_PRODUCT_RESULTS_COMPLETE';

export const LoadProductResults = createAction(LOAD_PRODUCT_RESULTS);
export const LoadProductResultsComplete = createAction(LOAD_PRODUCT_RESULTS_COMPLETE, props<{ payload: any[] }>());

