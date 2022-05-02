import React from 'react';
import data from './questions.json';

console.log(data);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
    };
  }
  handleReveal = (i) => {
    this.setState({
      number: this.state.number === i ? null : i,
    });
  };
  render() {
    return (
      <>
        <section className='section'>
          {data.map((single, i) => (
            <div className='question' key={i}>
              <h4 onClick={() => this.handleReveal(i)}>
                {single.Q}
                {this.state.number === i ? '👆' : '👇'}
              </h4>
              <p className={this.state.number === i ? 'active' : 'disable'}>
                {single.A}
              </p>
            </div>
          ))}
        </section>
      </>
    );
  }
}
export default App;