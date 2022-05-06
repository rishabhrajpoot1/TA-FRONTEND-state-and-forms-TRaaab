import React from 'react';
import Billing from './Billing';
class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      zip: '',
      city: '',
      country: '',
      checked: false,
    };
  }

  handleChange = ({ target }) => {
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleCheck = () => {
    this.setState({
      checked: false,
    });
  };

  handleCheck = () => {
    this.setState({
      checked: true,
    });
  };

  render() {
    let exportObj = {
      checked: this.state.checked,
      address: this.state.address,
      zip: this.state.zip,
      city: this.state.city,
      country: this.state.country,
    };
    return (
      <div>
        <header><h1>
      <i class="fa-solid fa-book-atlas"></i>
      Learning About Forms</h1>
      <p>Contolled vs Uncontrolled Components</p>
      </header>
      <h2 className='components'>Controlled Components</h2>
      <div className='container flex justify_between'>
        <section className='shipping'>
          <h2 className='heading2'>Shipping Address</h2>
          <form action=''>
            <label htmlFor='Address'>Address</label>
            <input
            placeholder='e.g New Delhi Vasnat Vihar'
              type='text'
              value={this.state.address}
              name='address'
              onChange={this.handleChange}
            />
            <label htmlFor='Zip'>Zip</label>
            <input
            placeholder='e.g 176057'
              type='text'
              value={this.state.zip}
              name='zip'
              onChange={this.handleChange}
            />
            <label htmlFor='City'>City</label>
            <input
            placeholder='e.g New Delhi'
              type='text'
              value={this.state.city}
              name='city'
              onChange={this.handleChange}
            />
            <label htmlFor='Country'>Country</label>
            <input
            placeholder='e.g India'
              type='text'
              value={this.state.country}
              name='country'
              onChange={this.handleChange}
            />
          </form>
        </section>
        <section className='billing'>
          <h2 className='heading2'>Billing Address</h2>
          <form className='checkboxForm'>
            <input className='checkbox' type='checkbox' onChange={this.handleCheck} />
            <label>Same as the Shipping Address?</label>
          </form>


          {this.state.checked ? (
            <Billing exportObj={exportObj} />
          ) : (
            <Billing exportObj='' />
          )}
        </section>
      </div>
      </div>
    );
  }
}
export default Shipping;
