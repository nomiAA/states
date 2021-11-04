import { ADD_POPULATION, FETCH_COUNTRY_DETAIL, FETCH_COUNTRY_DETAIL_FAILURE, FETCH_COUNTRY_DETAIL_REQUEST, FETCH_COUNTRY_DETAIL_SUCCESS, FETCH_STATE_FAILURE, FETCH_STATE_REQUEST, FETCH_STATE_SUCCESS, SELECT_STATE } from "../ActionTypes"


export const SelectState=data=>{
    return{
        type:SELECT_STATE,
        payload:data
    }
}
export const FetchStateRequest=()=>{
    return{
        type:FETCH_STATE_REQUEST
    }
}

export const FetchStateSuccess=data=>{
    return{
        type:FETCH_STATE_SUCCESS,
        payload:data
    }
}

export const FetchStateFailure=error=>{
    return{
        type:FETCH_STATE_FAILURE,
        payload:error
    }
}
export const FetchCountryDetailRequest=()=>{
    return{
        type:FETCH_COUNTRY_DETAIL_REQUEST
    }
}
export const FetchCountryDetailFailure=error=>{
    return{
        type:FETCH_COUNTRY_DETAIL_FAILURE,
        payload:error
    }
}
export const AddPopulation=data=>{
    return{
    type:ADD_POPULATION,
    payload:data
         }
}
export const FetchCountryDetailSuccess=(data)=>{
    return{
        type:FETCH_COUNTRY_DETAIL_SUCCESS,
        payload:data
    }
}
export const FetchStates=(dispatch)=>{
    dispatch(FetchStateRequest)
    fetch('http://pos.idtretailsolutions.com/countytest/states').
    then(res=>res.json()).then(data=>{
        dispatch(FetchStateSuccess(data.data))
        // console.log("thunk  dataaaaa   :",data.data)
    }).
    catch(error=>{
        dispatch(FetchStateFailure(error))
        console.log(error)
    })
}
export const  FetchCountryDetailsAPI=(detail)=>{
    console.log('detail thunk',detail)
    return(dispatch)=>{
        dispatch(FetchCountryDetailRequest)
        fetch(detail).
        then(res => res.json()).
        then(data => {
            console.log('thunk success',data.data)
            const total = (data.data.reduce((total, currentItem) => total = total + currentItem.population, 0));
            console.log("sum :",total)
            dispatch(FetchCountryDetailSuccess(data.data))
            dispatch(AddPopulation(total))
         
            // setCountryList(data.data)
            // CalculatePopulation(data.data)
        })
        .catch(error => {
            dispatch(FetchStateFailure(error))
            console.log("thunk error",error)})
    }
}

// export const FetchCountryDetailsAPI=(e)=>{
// dispatch(FetchCountryDetailRequest)
//     fetch(detail).
//     then(res => res.json()).
//     then(data => {
//         dispatch(FetchCountryDetailSuccess(data))
//         // setCountryList(data.data)
//         // CalculatePopulation(data.data)
//     })
//     .catch(error => console.log(error))
// }
