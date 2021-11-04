import { combineReducers } from "redux";
import StateReducer from "./StateReducers";
import SelectStateReducer from "./SelectStateReducer";
import CountryDetailsReducer from "./CountriesDetailsReducer";
import GetPopulationReducer from "./GetPopulationReducer";
const rootReducer=combineReducers({
    StateReducer,
    SelectStateReducer,
    CountryDetailsReducer,
    GetPopulationReducer
})

export default rootReducer;