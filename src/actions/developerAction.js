import { ADD_DEVELOPER, GET_DEVELOPERS, DEVELOPER_ERROR, DELETE_DEVELOPER, SET_LOADING } from './types'

// Action to get Developers
export const getDevelopers = () => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        // Fetch from API
        const res = await fetch('/developers');
        const data = await res.json();
        // Dispatch
        dispatch({
            type: GET_DEVELOPERS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: err.response.data
        })
    }
}

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

<<<<<<< HEAD
// Action to delete a developer
=======
// Action to delete a log
>>>>>>> af1830bc553d55f028d1f35b1f386832f42bbc18
export const deleteDeveloper = id => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        await fetch(`/developers/${id}`, {
            method: 'DELETE'
        });
        // Dispatch
        dispatch({
            type: DELETE_DEVELOPER,
            payload: id
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