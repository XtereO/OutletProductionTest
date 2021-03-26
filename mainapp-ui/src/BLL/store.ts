import {createStore,combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import rimsReducer from "./Reducers/rimsReducer";
import rimReducer from "./Reducers/rimReducer"
import accessorysReducer from "./Reducers/accessorysReducer"
import accessoryReducer from "./Reducers/accessoryReducer"
import aboutUsReducer from "./Reducers/aboutusReducer";
import lensReducer from "./Reducers/lensReducer";
import mainReducer from "./Reducers/mainReducer"

let rootReducer=combineReducers({
    rims:rimsReducer,
    rim:rimReducer,
    accessorys:accessorysReducer,
    accessory:accessoryReducer,
    aboutUs:aboutUsReducer,
    lens:lensReducer,
    main:mainReducer
})

type RootReducerType=typeof rootReducer
export type AppStateType=ReturnType<RootReducerType> 

let store=createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store