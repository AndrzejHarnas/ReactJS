import React from 'react';

class userData extends React.Component {

	render() {
		const {firstName="NONAME", lastName="NONAME", age=0} = this.props
		
		return(
		
		<div>
		<p>Witaj: {firstName} {lastName} masz: {age} lat </p>
		</div>
		
		);	
	}
}

export default userData;