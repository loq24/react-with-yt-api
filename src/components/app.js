import React, { Component } from 'react';
import SearchBar from '../container/search-bar';
import VideoDetail from '../container/video-detail';
import VideoList from '../container/video-list';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedVideo: null
    };
  }

  render() {
  	return (
      <div>
      	<SearchBar handleOnChange={ () => this.setState({selectedVideo: null}) } />
      	<VideoDetail selectedVideo={this.state.selectedVideo} />
      	<VideoList selectVideo={ (selectedVideo) => {this.setState({selectedVideo}); } } />
      </div>
    );
  }
}
