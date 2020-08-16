import {GET_LOGS, LOGS_ERROR, SET_LOADING} from "../Actions/types";

const initialState ={
  logs :null,
  current:null,
  loading:false,
  error:null
}

export default (state = initialState, action) =>{
  switch(action.type){
    case SET_LOADING:
      return {...state, loading: true}
    case GET_LOGS:
      return {...state , logs: action.payload , loading: false}
    case LOGS_ERROR:
      return {...state , error: action.payload , loading: false}
    default:
      return state
  }
}
