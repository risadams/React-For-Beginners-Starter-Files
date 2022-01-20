import React from "react";

import base from "../base";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";

import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // when component mounts (initial render)
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(`order-${params.storeId}`);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    // when state changes
    localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(this.state.order));
  }

  addFish = (fish) => {
    const currentState = { ...this.state.fishes };
    currentState[`fish${Date.now()}`] = fish;
    this.setState({ fishes: currentState });
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  addToOrder = (fishKey) => {
    const order = { ...this.state.order };
    order[fishKey] = order[fishKey] + 1 || 1;
    this.setState({
      order: { ...order }
    });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Fresh seafood market' />
          <ul className="fishes">
            {Object.keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order {...this.state} />
        <Inventory
          fish={this.state.fishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
};

export default App;