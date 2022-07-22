import { combineReducers } from "redux";
import {productReducer ,selectedproductReducer, }   from "./productReducer";
import { cartReducer } from "../cartReducer";
import { wishlistreducer } from "../reducers/wishlistReducer";


const rootred = combineReducers({
    productReducer,
    selectedproductReducer,
    cartReducer,
    wishlistreducer
})

export default rootred;