import { SELECT_STATE } from "../ActionTypes"

const initialState={
    selectedState:{},
}

const SelectStateReducer=(state=initialState,action)=>{
    switch(action.type)
{
    case SELECT_STATE:return{
        selectedState:action.payload
    }
    default:return state
}
}
export default SelectStateReducer;