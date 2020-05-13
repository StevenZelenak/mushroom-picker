import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';

class App extends React.Component {
  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    console.error('mushrooms', mushrooms);
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">Pick a mushroom</button>
      </div>
    );
  }
}

export default App;
