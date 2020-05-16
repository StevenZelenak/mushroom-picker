import React from 'react';
import './Mushrooms.scss';

class Mushrooms extends React.Component {
  render() {
    const { mushroom } = this.props;
    return (
    <div className=" Mushrooms col-3 my-2">
      <div id={mushroom.id} className="card">
        <img className="card-img-top img-responsive" src={mushroom.imgUrl} alt="Mushroom Card"/>
          <div className="card-body">
            <h5 className="card-title">{mushroom.name}</h5>
            <p className="card-text">{mushroom.description}</p>
          </div>
      </div>
    </div>
    );
  }
}

export default Mushrooms;
