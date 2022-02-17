import { ADD_DEVELOPER, DEVELOPER_ERROR, SET_LOADING } from './types'


// Action to add a Developer
export const addDeveloper = developer => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        // Create developer
        const res = await fetch('/developers', {
            method: 'POST',
            body: JSON.stringify(developer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // Dispatch
        dispatch({
            type: ADD_DEVELOPER,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: err.response.data
        })
    }
}


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}