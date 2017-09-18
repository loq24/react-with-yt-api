import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchVideos} from '../actions/index';
import {bindActionCreators} from 'redux';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term: ''};
	}

	handleOnChange(term){
		this.setState({term});
		this.props.searchVideos(term);
		this.props.handleOnChange();
	}

	render(){
		return (
			<div className="search-bar">
				<input 
					placeholder="Search videos here..."
					value={this.state.term} 
					onChange={ (event) => { this.handleOnChange(event.target.value); }  } />
			</div>
		);
	}

	componentWillMount(){
		this.props.searchVideos('Dota 2');
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({searchVideos: searchVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);