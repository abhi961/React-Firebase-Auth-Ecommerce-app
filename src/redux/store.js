import { legacy_createStore } from "redux";
import rootred from "./reducer/main";

const store = legacy_createStore(rootred , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store