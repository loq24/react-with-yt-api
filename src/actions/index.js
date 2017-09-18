import axios from 'axios';

const API_KEY = 'AIzaSyA_OzOpMBO58IC6HSwPgn_AFzEj-YT3RiY';
const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video`;
const SEARCH_VIDEOS = 'SEARCH_VIDEOS';
const SELECTED_VIDEO = 'SELECTED_VIDEO';

export function searchVideos(term){
	const url = `${ROOT_URL}&q=${term}`;
	const request = axios.get(url);
	return{
		type: SEARCH_VIDEOS,
		payload: request
	};
}

export function selectVideo(video){
	return{
		type: SELECTED_VIDEO,
		payload: video
	};
}