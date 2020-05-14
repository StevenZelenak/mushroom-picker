import React from 'react';
import './Mushrooms.scss';

class Mushrooms extends React.Component {
  render() {
    return (
    <div className=" Mushrooms col-3 my-2">
      <div className="card">
        <img className="card-img-top img-responsive" src={this.props.mushroom.imgUrl} alt="Mushroom Card"/>
          <div className="card-body">
            <h5 className="card-title">{this.props.mushroom.name}</h5>
            <p className="card-text">{this.props.mushroom.description}</p>
          </div>
      </div>
    </div>
    );
  }
}

export default Mushrooms;
