import {combineReducers} from "redux"
import counterReducer from "./counterReducer"

const reducers = combineReducers({
    counterReducer:counterReducer
});

export default reducers;