import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!isAvailable) {
      return <li>
        Sorry {fish ? fish.name : "fish"} is no longer available
      </li>
    }

    return (
      <li key={key}>
        {count} lbs
        <span>{this.props.fishes[key].name} </span>
        @ {formatPrice(count * fish.price)}
      </li>
    );
  }
  render() {
    const ids = Object.keys(this.props.order);
    const orderTotal = ids.reduce((prev, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prev + (count * fish.price);
      }
      return prev;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {ids.map(key => this.renderOrder(key))}
        </ul>
        <p className="total">Total: {formatPrice(orderTotal)}</p>
      </div>
    );
  }
};

export default Order;