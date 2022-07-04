import { ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, TOGGLE_CART, UPDATE_PRODUCT } from "./constants";

const initState = {
  productCart: [],
  isOpen: false,
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        isOpen: payload,
      };
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