import React from 'react';
import './Forest.scss';
import Mushrooms from '../Mushrooms/Mushrooms';

class Forest extends React.Component {
  render() {
    // modifying the ui
    const makeMushrooms = this.props.mushrooms.map((mushroom) => (
      <Mushrooms key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div className="Forest border border-dark">
        <h2>Mushrooms</h2>
        <div className="d-flex flex-wrap">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Forest;
