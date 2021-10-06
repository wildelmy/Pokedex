import { createStore,combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import LoginReducer from '../reducer/LoginReducer.jsx'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({
   login: LoginReducer
})

export const store = createStore (
    reducer,
    composeEnhancers(
        applyMiddleware(thunk))
    )