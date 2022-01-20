import React from "react";

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

  addFish = (fish) => {
    const currentState = { ...this.state.fishes };
    currentState[`fish${Date.now()}`] = fish;
    this.setState({ fishes: currentState });
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
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
};

export default App;