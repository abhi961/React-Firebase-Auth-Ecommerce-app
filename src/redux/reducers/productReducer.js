const initalState = {
    products:[],    
    
}
 
export const productReducer = (state= initalState , action) => {
      switch (action.type) {
        case "SET_PRODUCT":
             return{
                  ...state,
                products:[...state.products, ...action.payload]
             }
      
        default:
            return state
      }
}

export const selectedproductreducer = (state= initalState, action) => {
   switch (action.type) {
    case "SELECTED_PRODUCT":
      
       return{
         ...state,...action.payload
       
       }
   
    default:
      return state
   }
}


