import { combineReducers } from 'redux';

import ShopReducer from './ShopReducer';

const RootReducer = combineReducers({
  shops: ShopReducer
});

export default RootReducer;
