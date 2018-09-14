import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters'

class Car extends Component {
  state = {
    counters:[
      {id:1, name:'product1', value:0},
      {id:2, name:'product2', value:0},
      {id:3, name:'product3', value:0},
      {id:4, name:'product4', value:0},
    ]
  };

  constructor(){
    super()
    console.log('App - Constructor');
  };

  componentDidMount(){
    console.log('App - Montado');
  };

  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = () =>{
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({counters});
  };

  handleDelete = counterId =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  render() {
    console.log('App - Renderizado');
    return (
      <React.Fragment>
        <NavBar 
          totalProducts={this.state.counters.filter(c => c.value > 0).length}
        >
        </NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement}>
          </Counters>
        </main>
        </React.Fragment>
    );
  }
}

export default Car;
