import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  statusRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value), //in cents
      descRef: this.descRef.current.value,
      statusRef: this.statusRef.current.value,
      imageRef: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input ref={this.nameRef} type="text" name="fishName" placeholder="Fish Name" />
        <input ref={this.priceRef} type="text" name="fishPrice" placeholder="Fish Price" />
        <select ref={this.statusRef} name="fishStatus">
          <option value="available">Available!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={this.descRef} type="text" name="fishDesc" placeholder="Fish Desc"></textarea>
        <input ref={this.imageRef} type="text" name="fishImage" placeholder="Fish Image" />
        <button type="submit">➕ Add fish</button>
      </form>
    );
  }
};

export default AddFishForm;