import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  // get data
  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }
  // use data

  render() {
    return (
      <div className="App">
        <h1>Mushroom Game</h1>
        <Forest mushrooms={this.state.mushrooms}/>
      </div>
    );
  }
}

export default App;
