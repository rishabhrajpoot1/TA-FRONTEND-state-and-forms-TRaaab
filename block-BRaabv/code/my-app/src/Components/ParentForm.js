import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2.js';
import Step3 from './Step3';
class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: '',
      checkbox1: '',
      checkbox2: '',
      checkbox3: '',
      checkbox4: '',
      firstname: '',
      lastname: '',
      date: '',
      address: '',
      message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstname, lastname, date } = this.state;
    alert(`Your registration detail: \n
               Email: ${email} \n
               Firstname: ${firstname} \n
               Lastname: ${lastname}
               Date of Birth: ${date}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
            render the form steps and pass required props in
          */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            date={this.state.date}
            address={this.state.address}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
            checkpoint1={this.state.checkpoint1}
            checkpoint2={this.state.checkpoint2}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            checkpoint3={this.state.checkpoint3}
            checkpoint4={this.state.checkpoint4}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </>
    );
  }
}
export default ParentForm;
