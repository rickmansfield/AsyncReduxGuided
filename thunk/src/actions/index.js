import axios from "axios"

export const FETCH_PERSON_LOADING = "FETCH_PERSON_LOADING"
export const FETCH_PERSON_SUCCESS = "FETCH_PERSON_SUCCESS"
export const FETCH_PERSON_FAIL = "FETCH_PERSON_FAIL"


export const getPerson = () => {
    // 1. start load
    // 2. do our axios request
    // 3. successful dispatch success
    // 4. fail dispatch fail

    return dispatch => {
        // dispatch({type: FETCH_PERSON_LOADING})
        // axios.get('https://randomuser.me/api/')
        //     .then(res => {
        //         dispatch({ type: FETCH_PERSON_SUCCESS, payload: res.data.results[0]})
        //     })
        //     .catch(err => {
        //         dispatch({ type: FETCH_PERSON_FAIL, payload: err.error})
        //     })
        dispatch(fetchPersonLoading())
        axios.get('')
            .then(res => {
                dispatch(fetchPersonSuccess(res.data.results[0]))
            })
            .catch(err => {
                dispatch(err.error)
            })
    }
}


export const fetchPersonLoading = () => {
    return ({ type: FETCH_PERSON_LOADING })
}

export const fetchPersonSuccess = (person) => {
    return ({ type: FETCH_PERSON_SUCCESS, payload: person}) 
}

export const fetchPersonFail = (error) => {
    return ({ type: FETCH_PERSON_FAIL, payload: error}) 
}