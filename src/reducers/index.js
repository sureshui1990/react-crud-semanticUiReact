import { combineReducers } from "redux";
import ProductReducer from "./reducer_crud";
import ActiveProduct from "./reducer_active_product";

const rootReducer = combineReducers({
  products: ProductReducer,
  product: ActiveProduct
});

export default rootReducer;
