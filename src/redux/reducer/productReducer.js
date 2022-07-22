
const INITAL_STATE = {
    products: [],
}

export const productReducer = (state= INITAL_STATE , action) => {
    
    switch (action.type) {
    case "SET_PRODUCT":
        return{
            ...state, 
            products:[...state.products, ...action.payload]
        }
    default:
        return state
}}


export const selectedproductReducer = (state= INITAL_STATE , action ) => {
    switch (action.type) {
        case "SELECTED_PRODUCT" :
            return{
                ...state,
                ...action.payload,
                
            }
            case "REMOVE_SELECTED_PRODUCCT":
                return{}
    
        default:
            return state
    }
}