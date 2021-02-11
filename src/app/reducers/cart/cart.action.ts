import { Action, createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/interface/CartItem';

export const CART_ADD_ITEM = '[CART] CART_ADD_ITEM';
export const CART_REMOVE_ITEM = '[CART] CART_REMOVE_ITEM';

export const CartAddItem = createAction(CART_ADD_ITEM, props<{ payload: { item: CartItem } }>());
export const CartRemoveItem = createAction(CART_REMOVE_ITEM, props<{ payload: { item: CartItem } }>());
