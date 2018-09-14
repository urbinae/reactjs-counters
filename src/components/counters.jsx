import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
	render(){
		console.log('Counters - Renderizado');
		const {onReset, counters, onIncrement, onDelete} = this.props;
		return (
			<div>
				<button 
					onClick={onReset} 
					className="btn btn-info btn-sm"
				> Reset
				</button>
				{counters.map(counter => 
					<Counter 
						key = {counter.id} 
						onIncrement = {onIncrement}
						onDelete = {onDelete} 
						counter = {counter}>
					</Counter>
				)}
			</div>
		);
	}
}

export default Counters;