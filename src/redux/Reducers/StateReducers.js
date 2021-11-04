import { FETCH_STATE_FAILURE, FETCH_STATE_REQUEST, FETCH_STATE_SUCCESS } from "../ActionTypes"


const initialState={
    loading:false,
    states:[],
    error:''
}

 const StateReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_STATE_REQUEST:
            return{
                ...state,
                loading:true
            }
            case FETCH_STATE_SUCCESS:
                return{
                    loading:false,
                    states:action.payload,
                    error:''
                }
                case FETCH_STATE_FAILURE:
                    return{
                        loading:false,
                        states:[],
                        error:action.payload
                    }
            default:return state
    }
}
export default StateReducer;