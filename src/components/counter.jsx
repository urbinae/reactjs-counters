import React, {Component} from 'react';

class Counter extends Component{
	componentDidUpdate(prevProps, prevState){
		//console.log('prevProps', prevProps);
		//console.log('prevState', prevState);
		if (this.props.counter.value !== prevProps.counter.value)
			//Llamada ajax para obtener la nueva data del servidor
			console.log('cambió');
		else
			console.log('no cambió');
	}

	componentWillUnmount(){
		console.log('Counter - UnMount');
	}
	render(){
		console.log('Counter - Renderizado');
		return (
			<div>
				<span>{this.props.counter.name}</span>
				<span className={this.getBadgeClasses()}> {this.formatCount()} </span>
				<button 
					onClick={() => this.props.onIncrement(this.props.counter)} 
					className="btn btn-secondary btn-sm"
				> add 
				</button>
				<button 
					onClick={() => this.props.onDelete(this.props.counter.id)} 
					className="btn btn-danger btn-sm"
				> delete 
				</button>
			</div>
		);
	}

	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount(){
		const { value } = this.props.counter;
		return value === 0 ? 'Cero' : value
	}
}

export default Counter;