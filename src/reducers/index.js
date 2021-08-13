import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_NEW_SMURF,
  SET_ERROR
} from '../actions'

export const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURF_START:
      return { 
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      }
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case ADD_NEW_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }
    case SET_ERROR:
      return {
        error: 'Unable to smurfin\' find the smurfin\' smurfs'
      }
    default:
      return state
  }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

/*
  Task List:
  1. Adds the following state values into the initialState:
     - an array of smurfs
     - a boolean indicating if the app is loading
     - a string indicating a possible error message

  2. Add in the arguments needed to complete a standard reducer function.
  3. Add in a reducer case to accommodate the start of a smurf fetch.
  4. Add in a reducer case to accommodate the successful smurf api fetch.
  5. Add in a reducer cases to accommodate the failed smurf api fetch.
  6. Add in a reducer case to accommodate adding a smurf (including the name, 
     nickname, position, summary and an internally generated id) into your smurf list.
  7. Add in a reducer case that adds in a value to the error message.
*/