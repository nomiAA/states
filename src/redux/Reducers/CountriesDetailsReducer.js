import { FETCH_COUNTRY_DETAIL_FAILURE, FETCH_COUNTRY_DETAIL_REQUEST, FETCH_COUNTRY_DETAIL_SUCCESS } from "../ActionTypes"

const initialState={
    loading:false,
    CountryList:[],
    error:'',
}

const CountryDetailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COUNTRY_DETAIL_REQUEST:return{
             ...state,
             loading:true
        }
        case FETCH_COUNTRY_DETAIL_SUCCESS:return{
            loading:false,
            CountryList:action.payload,
            error:''
        }
        case FETCH_COUNTRY_DETAIL_FAILURE:return{
            loading:false,
            CountryList:[],
            error:action.payload
        }
        default:return state
    }
}

export default CountryDetailsReducer;