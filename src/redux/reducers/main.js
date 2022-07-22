import { combineReducers } from "redux";
import { productReducer ,selectedproductreducer} from "./productReducer";
const rootred = combineReducers({
    productReducer,
    selectedproductreducer,
})

export default rootred;