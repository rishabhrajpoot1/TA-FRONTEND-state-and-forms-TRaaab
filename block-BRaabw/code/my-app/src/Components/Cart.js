/* eslint-disable no-useless-constructor */
import React from 'react';
import EachProduct from './EachProduct';
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteProduct: '',
    };
  }
  handleCallback = (childData) => {
    this.setState({
      deleteProduct: childData,
    });
  };
  // onMainTrigger = (value) => {
  //   this.props.mainParentCallback(value);
  // };
  render() {
    // console.log('frustrated kid', this.state.deleteProduct);
    // console.log('this dat coming from app', this.props);
    // this.props.mainParentCallback(this.state.deleteProduct);
    // let arrayData;
    // let dummy = [...this.props.cart];
    // if (this.state.deleteProduct) {
    //   console.log('1');
    //   let reqIndex = this.props.cart.indexOf(this.state.deleteProduct);
    //   //   arrayData = this.props.cart.splice(reqIndex, 1);
    //   arrayData = dummy.reduce(function (acc, cv, index) {
    //     if (index !== reqIndex) {
    //       acc.push(cv);
    //     }
    //     return acc;
    //   }, []);
    //   console.log(arrayData);
    // } else {
    //   console.log('2');
    //   arrayData = this.props.cart;
    //   console.log(arrayData);
    // }
    // this.onMainTrigger(this.state.deleteProduct);
    let arrayData = this.props.cart;
    return (
      <>
        {arrayData.map((eachProduct) => (
          <EachProduct
            eachProduct={eachProduct}
            cartTwo={this.props.cart}
            parentCallback={this.props.mainParentCallback}
          />
        ))}
      </>
    );
  }
}
export default Cart;
export function getData(value) {
  return value;
}
