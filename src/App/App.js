import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import ModalOptions from '../components/ModalOptions/ModalOptions';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    status: 'none',
  }

  // get data
  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms });
    this.setState({ basket });
  }
  // use data

  pickAShroomEvent = (e) => {
    // Prevents the page from refreshing, which would remove the new data added in
    e.preventDefault();
    // Calls a function that pick a random mushroom and stores it in the basket array
    const status = mushroomData.pickAShroom();
    // Calls the basket array and stores it in a variable
    const basket = mushroomData.getBasket();
    // We recall the state of basket, which basically reprints basket on the pager. simialer to printToDom
    this.setState({ basket, status });
  };

  render() {
    return (
      <div className="App">
        <h1>Mushroom Game</h1>
        <button className='my-2 btn btn-success' onClick={this.pickAShroomEvent}>Pick a Shroom</button>
        {this.state.status !== 'none' ? <ModalOptions status={this.state.status}/> : ''}
        <Basket basket={this.state.basket}/>
        <Forest mushrooms={this.state.mushrooms}/>
        </div>
    );
  }
}

export default App;
