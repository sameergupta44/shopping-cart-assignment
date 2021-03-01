import * as HomeActions from './home.action';
// import { DisplayResultsState, ExamResults } from 'src/app/classes/interfaces/ExamResults';
import { HomeState } from './../../interface/HomeState';
import { createReducer, on } from '@ngrx/store';

const bannerData: any[] = [];

const initState: HomeState = {
  bannerData,
};

export const reducer = createReducer(
  initState,
  on(HomeActions.LoadBannerResultsComplete, (state: HomeState, data: any) => {
    return {
              ...state,
              bannerData: data.payload
            };
  }),
  on(HomeActions.LoadBannerResults, (state: HomeState) => state),
);
