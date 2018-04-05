const initialState = {
	listitems : []
}

export default function (state = initialState, action) {
	switch(action.type){
		case 'GET_LIST':
			return {...state, listitems:action.payload}
		default:
		return state 
	}
}