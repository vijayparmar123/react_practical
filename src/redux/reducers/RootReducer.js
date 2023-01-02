import { combineReducers } from 'redux';

import ShopReducer from './ShopReducer';
import CartReducer from './CartReducer';

const RootReducer = combineReducers({
  shops: ShopReducer,
  cart: CartReducer
});

export default RootReducer;
