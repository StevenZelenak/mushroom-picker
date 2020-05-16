import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  // get data
  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms });
    this.setState({ basket });
  }
  // use data

  render() {
    return (
      <div className="App">
        <h1>Mushroom Game</h1>
        <Basket basket={this.state.basket}/>
        <Forest mushrooms={this.state.mushrooms}/>
      </div>
    );
  }
}

export default App;
