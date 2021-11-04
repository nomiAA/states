import { ADD_POPULATION, } from "../ActionTypes"

const initialState={
    TotalPopulation:0,
}

const GetPopulationReducer=(state=initialState,action)=>{
    switch(action.type)
{
    case ADD_POPULATION:return{
        TotalPopulation:action.payload
    }
    default:return state
}
}
export default GetPopulationReducer;