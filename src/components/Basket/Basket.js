import React from 'react';
import './Basket.scss';
import Mushrooms from '../Mushrooms/Mushrooms';

class Basket extends React.Component {
  render() {
    const buildBasket = this.props.basket.map((mushroom) => (
      <Mushrooms key='basket-{mushroom.id}' mushroom={mushroom} />
    ));
    return (
      <div className="Basket">
        <h2>Basket</h2>
        <div id="holdsShrooms">
          {buildBasket}
        </div>
      </div>
    );
  }
}

export default Basket;
