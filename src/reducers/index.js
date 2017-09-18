import { combineReducers } from 'redux';
import Videos from './reducer_videos';

const rootReducer = combineReducers({
	videos: Videos
});

export default rootReducer;
