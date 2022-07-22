

const Inital_state ={
    carts:[],
    totalPrice:0,
    totalQty:0,

}
export const cartReducer = (state = Inital_state, action) => {
      switch (action.type) {
        case "ADD_TO_CART":
            
            return{
                ...state,
                carts:[...state.carts , action.payload]
            }

            //   const {items, qty} = action.payload
            //   const check = state.carts.find((pro)=> pro.id=== action.payload.items.id)
            //   if(check){
            //     return state;
            //   }else{
            //     const Tprice = state.carts + items.price*qty
            //     const TQty = state.totalQty + qty
            //     return{
            //         ...state, carts:[...state.carts, action.payload],
            //         totalPrice:Tprice,
            //         totalQty:TQty
            //     }
            //   }
            case "REMOVE_CART":
                const filtered = state.carts.filter((el)=> el.id !== action.payload)
                return{
                    ...state,
                    carts:filtered
                }
        default:
            return state
      }
} 