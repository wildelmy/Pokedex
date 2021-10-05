import { createStore,combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { LoginReducers } from "../reducer/LoginReducer";

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({
    login: LoginReducers
})

export const store = createStore (
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)