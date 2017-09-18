import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchVideos} from '../actions/index';
import {bindActionCreators} from 'redux';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term: 'Basketball'};
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
					value={this.state.term} 
					onChange={ (event) => { this.handleOnChange(event.target.value); }  } />
			</div>
		);
	}

	componentWillMount(){
		this.props.searchVideos(this.state.term);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({searchVideos: searchVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);