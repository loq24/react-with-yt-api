import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class VideoList extends Component{
	renderList(){
		if(!this.props.videos){
		 return <div>Loading...</div>;
		}
		
		return this.props.videos.map((video) => {
			const imageUrl = video.snippet.thumbnails.default.url;
			return ( <li 
					key={video.etag} onClick={ () => this.props.selectVideo(video)} 
					className="list-group-item">
						<div className="video-list media">
							<div className="media-left">
								<img className="media-object" src={imageUrl} />
							</div>
							<div className="media-body">
								<div className="media-heading">
									{video.snippet.title}
								</div>
							</div>
						</div>
					</li> );
		});
	}
	render(){
		return(
			<div className="col-md-4">
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		videos: state.videos
	};
}

export default connect(mapStateToProps)(VideoList);