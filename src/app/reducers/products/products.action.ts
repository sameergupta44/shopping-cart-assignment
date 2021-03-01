import { Action, createAction, props, union } from '@ngrx/store';
import { Category } from 'src/app/interface/Category';

export const LOAD_PRODUCT_RESULTS = '[PRODUCT_RESULTS] LOAD_PRODUCT_RESULTS';
export const LOAD_PRODUCT_RESULTS_COMPLETE = '[PRODUCT_RESULTS] LOAD_PRODUCT_RESULTS_COMPLETE';

export const LOAD_CATEGORY_RESULTS = '[PRODUCT_RESULTS] LOAD_CATEGORY_RESULTS';
export const LOAD_CATEGORY_RESULTS_COMPLETE = '[PRODUCT_RESULTS] LOAD_CATEGORY_RESULTS_COMPLETE';

export const APPLY_FILTER = '[PRODUCT_RESULTS] APPLY_FILTER';
export const REMOVE_FILTER = '[PRODUCT_RESULTS] REMOVE_FILTER';

export const LoadProductResults = createAction(LOAD_PRODUCT_RESULTS);
export const LoadProductResultsComplete = createAction(LOAD_PRODUCT_RESULTS_COMPLETE, props<{ payload: any[] }>());

export const LoadCategoryResults = createAction(LOAD_CATEGORY_RESULTS);
export const LoadCategoryResultsComplete = createAction(LOAD_CATEGORY_RESULTS_COMPLETE, props<{ payload: Category[] }>());

export const ApplyFilter = createAction(APPLY_FILTER,  props<{ payload: Category }>());
export const RemoveFilter = createAction(REMOVE_FILTER, props<{ payload: Category }>());
