import { createStore,combineReducers} from "redux";
import { LoginReducers } from "../reducer/LoginReducer";


const reducer = combineReducers({
    login: LoginReducers
})

export const store = createStore (
    reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);