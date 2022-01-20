import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func
  };

  handleChange = (event) => {
    const target = event.currentTarget;
    const updatedFish = { ...this.props.fish, [target.name]: target.value };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    var fish = this.props.fish;
    return (
      <form className="fish-edit" onSubmit={this.editFish}>
        <input onChange={this.handleChange} type="text" name="name" placeholder="Fish Name" value={fish.name} />
        <input onChange={this.handleChange} type="text" name="price" placeholder="Fish Price" value={fish.price} />
        <select onChange={this.handleChange} name="status" value={fish.status}>
          <option value="available">Available!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea onChange={this.handleChange} type="text" name="desc" placeholder="Fish Desc" value={fish.desc}></textarea>
        <input onChange={this.handleChange} type="text" name="image" placeholder="Fish Image" value={fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>➖ Delete Fish</button>
      </form>
    );
  }
};

export default AddFishForm;