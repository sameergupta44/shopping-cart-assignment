import * as CartActions from './cart.action';
import { CartState } from '../../interface/CartState';
import { createReducer, on } from '@ngrx/store';
import { CartItem } from 'src/app/interface/CartItem';

const cart: CartItem[] = [];

const initState: CartState = {
  cart
};

export const reducer = createReducer(
  initState,
  on(CartActions.CartAddItem, (state: CartState, data: any) => {
    console.log(data.payload);
    const index = state.cart.findIndex(obj => obj.id === data.payload.id);
    console.log('index: ' + index);
    if (index > -1) {
      // state.cart[index].quantity += 1;
      return {
        ...state,
        cart: state.cart.map(o => {
          if (o.id === data.payload.id) {
            return {...o, quantity: (o.quantity + 1)}
          }
          return o;
        })
      };
    }

    return {
      ...state,
      cart: [...state.cart, data.payload]
    };
  }),
  on(CartActions.CartRemoveItem, (state: CartState, data: any) => {
    console.log(data.payload);
    const index = state.cart.findIndex(obj => obj.id === data.payload.id);
    state.cart.splice(index, 1);
    return {
      ...state,
    };
  }),
);
