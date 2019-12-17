import {createStore} from "redux";
import scoreReducer from "./reducers/scoreReducers";

const store  = createStore (scoreReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
