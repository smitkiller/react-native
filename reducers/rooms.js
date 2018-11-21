import {LOAD_ROOMS_REQUEST,
		LOAD_ROOMS_SUCCESS,
		LOAD_ROOMS_FAILURE
	} from '../constants';
const initialState = {
	rooms:[],
	isFetching:false,
	error:false
}

export default (state = initialState, action) => {
  switch(action.type) {
  	case LOAD_ROOMS_REQUEST:
  		return {
  			...state,
  			rooms:[],
  			isFetching:true
  		}
    case LOAD_ROOMS_SUCCESS:
    	return{
    		...state,
    		isFetching:false,
    		rooms:action.payload
    	}
    case LOAD_ROOMS_FAILURE:
    	return{
    		...state,
    		isFetching:false,
    		error:true
    	}
    default:
      return state
  }
}