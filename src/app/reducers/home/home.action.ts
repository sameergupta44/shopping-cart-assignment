import { Action, createAction, props, union } from '@ngrx/store';

export const LOAD_BANNER_RESULTS = '[BANNER_RESULTS] LOAD_BANNER_RESULTS';
export const LOAD_BANNER_RESULTS_COMPLETE = '[BANNER_RESULTS] LOAD_BANNER_RESULTS_COMPLETE';

export const LoadBannerResults = createAction(LOAD_BANNER_RESULTS);
export const LoadBannerResultsComplete = createAction(LOAD_BANNER_RESULTS_COMPLETE, props<{ payload: any[] }>());

