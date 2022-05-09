import React from 'react';

class EachProduct extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  addQuantity = (each, index) => {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index,
      quantity: this.state.quantity + 1,
    });
  };
  removeQuantity = (each, index) => {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index,
      quantity:
        this.state.quantity === 0
          ? this.state.quantity
          : this.state.quantity - 1,
    });
  };
  onTrigger = (id) => {
    console.log(id, this.props);

    this.props.parentCallback(id);
  };

  render() {
    return (
      <>
        <article key={this.props.eachProduct.id}>
          <img
            src={`/static/products/${this.props.eachProduct.sku}_2.jpg`}
            alt={this.props.eachProduct.title}
          />
          <p>{this.props.eachProduct.title}</p>
          <p>quantity : {this.state.quantity}</p>
          <button onClick={() => this.onTrigger(this.props.eachProduct.id)}>
            Delete
          </button>
          <button onClick={this.addQuantity}>+</button>
          <button onClick={this.removeQuantity}>-</button>
        </article>
      </>
    );
  }
}
export default EachProduct;
