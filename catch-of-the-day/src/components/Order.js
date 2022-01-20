import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { formatPrice } from "../helpers";

class Order extends React.Component {

  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!isAvailable) {
      return (
        <CSSTransition classNames='order' key={key} timeout={{ enter: 250, exit: 250 }}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      )
    }

    return (
      <CSSTransition classNames='order' key={key} timeout={{ enter: 250, exit: 250 }}>
        <li key={key}>
          <TransitionGroup className='count' component='span'>
            <CSSTransition classNames='count' key={count} timeout={{ enter: 250, exit: 250 }}>
              <span>{count} lbs</span>
            </CSSTransition>
          </TransitionGroup>
          <span>{this.props.fishes[key].name} </span>
          {formatPrice(count * fish.price)}
          <button onClick={() => this.props.removeFromOrder(key)} title='Remove from Order'>❌ Remove</button>
        </li>
      </CSSTransition>
    );
  }
  render() {
    const ids = Object.keys(this.props.order);
    const orderTotal = ids.reduce((prev, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (!fish) { return null; }
      if (isAvailable) {
        return prev + (count * fish.price);
      }
      return prev;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {ids.map(key => this.renderOrder(key))}
        </TransitionGroup>
        <p className="total">
          Total: <strong>{formatPrice(orderTotal)}</strong>
        </p>
      </div>
    );
  }
};

export default Order;