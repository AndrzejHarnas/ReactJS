import React from 'react';

class userData extends React.Component {
	
	constructor(){
		super();
		this.state ={counter: 0};
	}

	render() {
		const {firstName="NONAME", lastName="NONAME", age=0} = this.props
		
		return(
		
		<div>
		<p>Witaj: {firstName} {lastName} masz: {age} lat </p>
		<button onClick={this.buttonClick}> Kliknij </button>
		
		<button onClick={this.add.bind(this)}> + </button>
		<output>{this.state.counter}</output>
		<button onClick={this.minus.bind(this)}> - </button>
		
		</div>
		
		);	
	}
	
	buttonClick(){
		
     alert("Cześć");
		
	}
	add(){
		this.setState(
		{counter: this.state.counter +1})
	}
	
	minus(){
		this.setState(
		{counter: this.state.counter -1})
	}
	
}

export default userData;