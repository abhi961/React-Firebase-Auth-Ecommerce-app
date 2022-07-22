export const setproducts = (products) => {
    return {
        type : "SET_PRODUCT",
        payload: products
    }
}

export const selectedProduct = (product) => {
    return{
        type: "SELECTED_PRODUCT",
        payload: product,
    }
}
export const Removeselectedproduct = () =>{

    return{
        type: "REMOVE_SELECTED_PRODUCCT"
    }
} 

export const addtocardProduct = (items) => {
    return{
        type:"ADD_TO_CART",
        payload:items
    }
}

export const addtowishlistproduct = (itemsProduct) => {
    return{
        type:'ADD_TO_WISHLIST',
        payload: itemsProduct
    }
}

export const removeCart = (id) => {
    return{
        type: "REMOVE_CART",
        payload:id
    }
}