import React from "react";
import PropTypes from "prop-types";

import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    addFish: PropTypes.func
  };

  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fish).map(key => {
          return (
            <EditFishForm
              key={key}
              index={key}
              fish={this.props.fish[key]}
              deleteFish={this.props.deleteFish}
              updateFish={this.props.updateFish} />)
        })}
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSampleFishes}>Load Samples</button>
      </div>
    );
  }
};

export default Inventory;