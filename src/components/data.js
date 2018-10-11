import React from 'react';

class userData extends React.Component {
	
	constructor(){
		super();
		this.state ={counter: 0, name:'noname', surname:'noname'};
	}

	render() {
		const {firstName='NONAME', lastName='NONAME', age=0} = this.props
		
		return(
//dodano nowe funkcjie i dwa inputy i dwa outputy		
		<div>
		<p>Witaj: {firstName} {lastName} masz: {age} lat </p>
		<button onClick={this.buttonClick}> Kliknij </button>
		<button onClick={this.add.bind(this)}> + </button>
		<output>{this.state.counter}</output>
		<button onClick={this.minus.bind(this)}> - </button>
		<br/>
		<p>Podaj imię:</p>
		<input type='text' onChange={this.writeName.bind(this)} id='input1'></input> <output id='out1'> {this.state.name} </output>
		<br/> 
		<p>Podaj Nazwisko: </p>
		<input type='text' onChange={this.writeSurname.bind(this)} id='input2'></input> <output id='out2'>  {this.state.surname} </output>
		</div>
		);	
		
	}
	
	buttonClick(){
     alert('Cześć');
		
	}
	add(){
		this.setState(
		{counter: this.state.counter +1})
	}
	
	minus(){
		this.setState(
		{counter: this.state.counter -1})
	}

	writeName(){
		var x = document.getElementById('input1').value; 
		
		this.setState(
		{name: x}
		)
	}
	
	writeSurname(){
		this.setState(
		{surname: document.getElementById('input2').value }
		)
	}
	
}

export default userData;
