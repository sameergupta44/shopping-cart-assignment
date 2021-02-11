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
              bannerData: data
            };
  }),
  on(HomeActions.LoadBannerResults, (state: HomeState) => state),
);

// tslint:disable-next-line: typedef
// export function reducer(state: HomeState, action: Action) {
//   return HomeReducer(state, action);
// }

// export function reducer(state: HomeState = initState, action: HomeActions.Actions): HomeState {

//   switch (action.type) {
//     case HomeActions.LOAD_BANNER_RESULTS_COMPLETE:
//       return {
//         ...state,
//         bannerData: action.payload
//       };
//     default:
//       return state;
//   }
// }
