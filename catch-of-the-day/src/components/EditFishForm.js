import React from "react";

class AddFishForm extends React.Component {
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
      </form>
    );
  }
};

export default AddFishForm;