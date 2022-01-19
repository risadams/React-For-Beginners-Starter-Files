import React from 'react';
class StorePicker extends React.Component {
  render() {
    {/* Must have a single return element, can use empty element <></> or <React.Fragment> */ }
    return (
      <>
        <form className='store-selector'>
          <h2>🏪 Store Selector</h2>
          <input type='text' required placeholder='Store Name'></input>
          <button type='Submit'>Visit Store ➡️</button>
        </form>
      </>);
  }
}

export default StorePicker;