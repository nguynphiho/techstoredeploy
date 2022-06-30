import cartReducer from "redux/cart/reducer";

const { combineReducers } = require("redux");
const RootReducer = combineReducers({
  cartReducer,
})

export default RootReducer;