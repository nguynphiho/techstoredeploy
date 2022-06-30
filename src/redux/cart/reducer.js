import { ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, UPDATE_PRODUCT } from "./constants";

const initState = {
  productCart: [],
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productCart: [...state.productCart, payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productCart: [...state.productCart.filter(item => item.id !== payload)]
      }
    case UPDATE_PRODUCT:
      console.log(payload);
      return {
        ...state,
        productCart: state.productCart.map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              ...payload,
            }
          } else return {
            ...item,
          }
        })
      };
    case CLEAR_CART:
      return {
        ...state,
        productCart: [],
      }
    default:
      return state;
  }
}

export default cartReducer;