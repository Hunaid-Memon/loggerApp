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

// Action to delete a log
export const deleteLog = id => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        // Dispatch
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}