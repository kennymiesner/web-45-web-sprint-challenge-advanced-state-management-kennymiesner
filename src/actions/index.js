import axios from 'axios';

/*
  Task List:
  1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, 
     performs an axios call to retrieve smurfs from our server, saves the result of that call to our 
     state and shows an error if one is made.
  2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
  3. Add a standard action that allows us to set the value of the error message slice of state.
*/

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL'
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF'
export const SET_ERROR = 'SET_ERROR'

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }))
}

export const addNewSmurf = (formValue) => {
  return({type: ADD_NEW_SMURF, payload: formValue})
}

export const setError = () => {
  return({type: SET_ERROR})
}
