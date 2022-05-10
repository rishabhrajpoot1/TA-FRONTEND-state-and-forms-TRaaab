/* eslint-disable no-useless-concat */
/* eslint-disable no-useless-constructor */
import React from 'react';
import data from '../data.json';
import Cart from './Cart';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortProducts: '',
      products: [],
      sizes: [],
      filteredProducts: [],
      cart: [],
      toggle: false,
    };
  }
  handleSort = (size) => {
   this.setState({
      sizes: [...this.state.sizes, size],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      sortProducts: event.target.value,
    });
  };
  handleAddToCart = (product) => {
    if (this.state.cart.indexOf(product) === -1 ? true : false) {
      this.setState((prevState) => {
        return {
          cart: [...prevState.cart, product],
        };
      });
    }
  };
  mainHandleCallback = (productId) => {
    this.setState({
      cart: this.state.cart.filter((product) => product.id !== productId),
    });
  };
  handleCart = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  addQuantity = (each, index) => {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index,
      quantity: this.state.quantity + 1,
    });
  };

  render() {
    console.log(this.state.deleteMainProduct);
    // console.log(this.state.sizes);
    let filteredArray = [];
    if (this.state.sizes.length >= 1) {
      for (let i = 0; i < this.state.sizes.length; i++) {
        data.products.filter((product) => {
          if (product.availableSizes.includes(this.state.sizes[i])) {
            filteredArray.indexOf(product) === -1
              ? filteredArray.push(product)
              : console.log('');
          }
          return '';
        });
      }
    }
    let productsArray;
    if (filteredArray.length === 0) {
      productsArray = data.products;
    } else {
      productsArray = filteredArray;
    }
    if (this.state.sortProducts === 'Highest to Lowest') {
      productsArray = productsArray.sort((a, b) => b.price - a.price);
    }
    if (this.state.sortProducts === 'Lowest to Highest') {
      productsArray = productsArray.sort((a, b) => a.price - b.price);
    }
    console.log();
    return (
      <>
      <h1>Shopping Cart</h1>
      <section className='sort'>
        <section>
          <button
            
            onClick={() => {this.handleSort('XS');
          }}
          className='size'
          >
            XS
          </button>
          <button
            className='size'
            onClick={() => this.handleSort('X')}
          >
            X
          </button>
          <button
            className='size'
            onClick={() => this.handleSort('S')}
          >
            S
          </button>
          <button
          className='size'
            onClick={() => this.handleSort('M')}
          >
            M
          </button>
          <button
            className= 'size'
            onClick={() => this.handleSort('L')}
          >
            L
          </button>
          <button
            className='size'
            onClick={() => this.handleSort('XL')}
          >
            XL
          </button>
          <button
            className='size'
            onClick={() => this.handleSort('XXL')}
          >
            XXL
          </button>
          <form>
            <select
              className='border bg-transparent p-3 border-gray-500'
              onChange={this.handleSubmit}
              name='sort'
              id='sort'
            >
              <option>Sort the products</option>
              <option value='Highest to Lowest'>Price - High to Low</option>
              <option value='Lowest to Highest'>Price - Low to High</option>
            </select>
          </form>
        </section>
        <div
          onClick={this.handleCart}
          className='inline-block p-2 rounded-lg icon'
        >
          <div className='circle' onClick={this.addQuantity}>0
            
          </div>
          <img src='/static/bag-icon.png' alt='bag-icon.png' />
        </div>
        </section>
        
        <section className={this.state.toggle ? 'display' : 'none'}>
          <p onClick={this.handleCart}>X</p>
          <h3>cart</h3>
          <Cart
            cart={this.state.cart}
            mainParentCallback={this.mainHandleCallback}
          />
        </section>
        <section className='flex flex-col md:flex md:flex-row md:flex-wrap'>
          {productsArray.map((eachProduct) => (
            <article
              className='article'
              key={eachProduct.id}
            >
              <img
                src={`/static/products/${eachProduct.sku}_1.jpg`}
                alt={eachProduct.title}
              />
              <p className='text-Orange-500 text-2xl my-3'>
                {eachProduct.title}
              </p>
              <p>{eachProduct.style}</p>
              <p>{eachProduct.availableSizes}</p>
              <div className='currency'>
              <p>{eachProduct.currencyFormat}</p>
              <p>{eachProduct.price}</p>
              </div>
              <button className='cart' onClick={() => this.handleAddToCart(eachProduct)}>
                Add to the cart
              </button>
            </article>
          ))}
        </section>
      </>
    );
  }
}
export default App;
