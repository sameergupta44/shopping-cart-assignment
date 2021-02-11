import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLogin from './login/login.reducer';
import * as fromHome from './home/home.reducer';
import * as fromProduct from './products/products.reducer';
import * as fromCart from './cart/cart.reducer';
import { LoginState } from '../interface/LoginState';
import { HomeState } from '../interface/HomeState';
import { ProductState } from '../interface/ProductState';
import { CartState } from '../interface/CartState';

export interface State {
  login: LoginState;
  home: HomeState;
  product: ProductState;
  cart: CartState;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  home: fromHome.reducer,
  product: fromProduct.reducer,
  cart: fromCart.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Login Selectors
 */
const getLoginState = (state: State) => state.login;
const isUserLoggedIn = (state: LoginState) => {
  if (state.isloggedIn === true) {
    return true;
  }
  return false;
};

export const isUserLoggedInSelector = createSelector(getLoginState, isUserLoggedIn);

/**
 * Home Selectors
 */
const getHomeState = (state: State) => state.home;
const getBannerData = (state: HomeState) => {
  return state.bannerData;
};

export const getBannerDataSelector = createSelector(getHomeState, getBannerData);

/**
 * Product Selectors
 */
const getProductState = (state: State) => state.product;
const getProductData = (state: ProductState) => {
  return state.productsData;
};

export const getProductDataSelector = createSelector(getProductState, getProductData);

/**
 * Cart Selectors
 */
const getCartState = (state: State) => state.cart;
const getCartItems = (state: CartState) => {
  return state.cart;
};

const getCartItemsCount = (state: CartState) => {
  const totalItemCount = state.cart.reduce((count, item) => count + item.quantity, 0);
  return totalItemCount;
};

export const getCartItemsSelector = createSelector(getCartState, getCartItems);
export const getCartItemsCountSelector = createSelector(getCartState, getCartItemsCount);
