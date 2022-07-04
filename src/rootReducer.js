import cartReducer from "redux/cart/reducer";
import sideBarMenuReducer from "redux/sidebarMenu/reducer";

const { combineReducers } = require("redux");
const RootReducer = combineReducers({
  cartReducer,
  sideBarMenuReducer,
})

export default RootReducer;