const Inital_state = {
    wishlistpro:[],
}
 
 export const wishlistreducer = (state= Inital_state, action) => {

    switch (action.type) {
        case "ADD_TO_WISHLIST":
            
        return{
            ...state,
            wishlistpro:[...state.wishlistpro, action.payload]
        }
    
        default:
            return state
    }
}