import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';
class StorePicker extends React.Component {

  static propTypes = {
    history: PropTypes.object
  };

  inputRef = React.createRef();

  constructor() {
    super();
    this.transferToStore = this.transferToStore.bind(this);
  }

  render() {
    {/* Must have a single return element, can use empty element <></> or <React.Fragment> */ }
    return (
      <>
        <form className='store-selector' onSubmit={this.transferToStore}>
          <h2>🏪 Store Selector</h2>
          <input ref={this.inputRef} type='text' required placeholder='Store Name' defaultValue={getFunName()}></input>
          <button type='Submit'>Visit Store ➡️</button>
        </form>
      </>);
  }

  transferToStore = (event) => {
    event.preventDefault();
    const storeId = this.inputRef.current.value;
    this.props.history.push(`/store/${storeId}`);
  }
}

export default StorePicker;