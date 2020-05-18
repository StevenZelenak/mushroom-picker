import React from 'react';
import './Basket.scss';
import Mushrooms from '../Mushrooms/Mushrooms';
import mushroomData from '../../helpers/data/mushroomData';

class Basket extends React.Component {

  counter = () => {
    let count = mushroomData.getCount();
    count += 1;
    mushroomData.setCount(count);
    return count;
  }

  render() {
    const buildBasket = this.props.basket.map((mushroom) => (
      <Mushrooms key={this.counter() + mushroom.id} mushroom={mushroom} />
    ));
    return (
      <div className="Basket">
        <h2>Basket</h2>
        <div className="d-flex flex-wrap" id="holdsShrooms">
          {buildBasket}
        </div>
      </div>
    );
  }
}

export default Basket;
