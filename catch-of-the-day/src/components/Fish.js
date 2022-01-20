import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const key = this.props.index;
    const fish = this.props.details;
    const isAvailable = fish && fish.status === "available";
    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {fish.name}
          <span className="price">{formatPrice(fish.price)}</span>
        </h3>
        <img src={fish.image} alt={fish.name} />
        <p className="fish-desc">{fish.desc}</p>

        <button disabled={!isAvailable} onClick={() => { this.props.addToOrder(key); }}>
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
};

export default Fish;