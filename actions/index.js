import {LOAD_ROOMS_REQUEST,
		LOAD_ROOMS_SUCCESS,
		LOAD_ROOMS_FAILURE
	} from '../constants';

export function loadRooms(){
	return dispatch=>{
		dispatch(loadRoomRequest());
		dispatch(loadData());
	}
}

function loadData(){
	const datas=[
				{
					'id':1,
					 'name':'react',
					 'lastname':'redux'
				},
				{
					'id':2,
					'name':'som',
					'lastname':'cool'
				}
	]
		if(datas !==''){
			return dispatch=>{
				dispatch(loadRoomsSuccess(datas));
			}
		}else{
			return dispatch=>{
				dispatch(loadRoomsFailure(datas));
			}
		}
	
}
function loadRoomRequest(){
	return{
		type:LOAD_PAGES_REQUEST
	}
}

function loadRoomsSuccess(rooms){
	return{
		type:LOAD_PAGES_SUCCESS,
		payload:rooms
	}
}
function loadRoomsFailure(){
	return{
		type:LOAD_PAGES_FAILURE
	}
}