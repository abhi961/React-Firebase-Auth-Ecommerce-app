const INITALSTATE = {
  carts: [],
  totalPrice: 0,
  totalQty: 0,
};

export const cartReducer = (state = INITALSTATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
   

    default:
      return state;
  }
};
