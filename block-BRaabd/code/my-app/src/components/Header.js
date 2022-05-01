// import basketball from "../images/basketball.jpg"
// import cricket from "../images/cricket.jpg"
// import laptop from "../images/laptop.jpg"
// import phone from "../images/phone.jpg"
// import pubg from "../images/pubg.jpg"
// import show from "../images/show-image.jpg"
// import tiger from "../images/tiger.jpg"


/* eslint-disable no-useless-constructor */
import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '../images/basketball.jpg',
    };
  }
  handleChange = (e) => {
    this.setState({
      photoUrl: `../images/${e.target.innerText}.jpg`,
    });
  };
  render() {
    return (
      <>
        <section class='section'>
          <div>
            <button onClick={this.handleChange}>basketball</button>
            <button onClick={this.handleChange}>pubg</button>
            <button onClick={this.handleChange}>tiger</button>
            <button onClick={this.handleChange}>phone</button>
            <button onClick={this.handleChange}>laptop</button>
            <button onClick={this.handleChange}>cricket</button>
          </div>
          <img className='avatar' src={this.state.photoUrl} alt='' />
        </section>
      </>
    );
  }
}
export default Avatar;