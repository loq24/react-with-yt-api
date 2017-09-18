import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchVideos} from '../actions/index';
import {bindActionCreators} from 'redux';

class VideoDetail extends Component{
	
	render(){
		const { videos, selectedVideo } = this.props;
		const video = videos[0];
		if(!video){
			return <div>Loading...</div>;
		}
		
		const videoID = video.id.videoId;		
		const src = (!selectedVideo) ? `https://www.youtube.com/embed/${videoID}` : `https://www.youtube.com/embed/${selectedVideo.id.videoId}` ;
		const title = selectedVideo ? selectedVideo.snippet.title : video.snippet.title;
		const description = selectedVideo ? selectedVideo.snippet.description : video.snippet.description;

		return(
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={src}></iframe>
				</div>
				<div className="details">
					<div><strong>{title}</strong></div>
					<span>{description}</span>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		videos: state.videos
	};
}

export default connect(mapStateToProps)(VideoDetail);