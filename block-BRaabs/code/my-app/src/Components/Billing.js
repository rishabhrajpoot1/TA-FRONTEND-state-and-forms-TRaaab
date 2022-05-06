import React from 'react';

class Billing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.exportObj);
    return (
      <div className='billing__section'>
        <form action=''>
          <label htmlFor='Address'>Address</label>
          <input
           placeholder='e.g New Delhi Vasnat Vihar'
            type='text'
            value={this.props.exportObj.address}
            name='address'
            onChange={this.props.fn}
          />
          <label htmlFor='Zip'>Zip</label>
          <input placeholder='e.g 176057' type='text' name='zip' value={this.props.exportObj.zip} />
          <label htmlFor='City'>City</label>
          <input placeholder='e.g New Delhi' type='text' name='city' value={this.props.exportObj.city} />
          <label htmlFor='Country'>Country</label>
          <input
           placeholder='e.g India'
            type='text'
            name='country'
            value={this.props.exportObj.country}
          />
        </form>
      </div>
    );
  }
}
export default Billing;
