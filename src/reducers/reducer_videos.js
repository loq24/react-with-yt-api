export default ( state = [], action ) => {
	switch(action.type){
		case 'SEARCH_VIDEOS':
		return action.payload.data.items;
	}
	return state;
}