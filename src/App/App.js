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

  pickAShroomEvent = (e) => {
    // Prevents the page from refreshing, which would remove the new data added in
    e.preventDefault();
    // Calls a function that pick a random mushroom and stores it in the basket array
    mushroomData.pickAShroom();
    // Check if the random shroom is poisoned
    mushroomData.checkPoison();
    // Check if the random shroom is deadly
    mushroomData.checkDeadly();
    // Check if you pulled a magic Shroom
    mushroomData.checkMagic();
    // Calls the basket array and stores it in a variable
    const basket = mushroomData.getBasket();
    // We recall the state of basket, which basically reprints basket on the pager. simialer to printToDom
    this.setState({ basket });
    // Check if we won the game
    mushroomData.checkIfWon();
  };

  render() {
    return (
      <div className="App">
        <h1>Mushroom Game</h1>
        <button className='my-2 btn btn-success' onClick={this.pickAShroomEvent}>Pick a Shroom</button>
        <Basket basket={this.state.basket}/>
        <Forest mushrooms={this.state.mushrooms}/>
        <div id="modal-poison" className="bg-modal">
          <div className="modal-content">
          <div className="close">+</div>
            <img class="img-modal" src="https://i.imgur.com/R8GINvY.jpg" alt=""/>
            <h2 className="my-1">YOU JUST GOT POISONED!!! YOU LOSE 2 SHROOMS!</h2>
          </div>
        </div>
        <div id="modal-magic" className="bg-modal">
          <div className="modal-content">
          <div className="close">+</div>
            <img class="img-modal" src="https://i.makeagif.com/media/8-07-2016/y4JmOR.gif" alt=""/>
            <h2 className="my-1">YOU JUST WON!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
