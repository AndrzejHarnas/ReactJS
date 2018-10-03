import React from 'react';
import PropTypes from 'prop-types';
class TextComponent extends React.Component {
	
	static propTypes = {
		clickText: PropTypes.string.isRequired,
		staticText: PropTypes.string.isRequired
	};
	
	
	render(){
		return(
		<div>
		<p className="ha">{this.props.staticText}</p>
		<p className="ha">Text from parent: {this.props.clickText}</p>
		</div>
		);
	}
}

export default TextComponent;