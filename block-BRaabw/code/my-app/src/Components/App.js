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
  handleClick = () => {
    console.log('hello');
  };
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
        <section className='w-7/12 border md:w-7/12 border-red-300 flex flex-wrap'>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('X')}
          >
            X
          </button>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('L')}
          >
            L
          </button>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('XL')}
          >
            XL
          </button>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('XXL')}
          >
            XXL
          </button>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('M')}
          >
            M
          </button>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('XS')}
          >
            XS
          </button>
          <button
            className='border border-green-500 p-3 rounded-full m-2'
            onClick={() => this.handleSort('S')}
          >
            S
          </button>
        </section>
        <section>
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
          className='bg-black inline-block p-2 rounded-lg'
        >
          <img src='/static/bag-icon.png' alt='bag-icon.png' />
        </div>
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
              className='article w-10/12 md:w-6/12 lg:w-3/12 p-3 border text-center m-auto mt-2 shadow-sm'
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
              <p>{eachProduct.currencyFormat}</p>
              <p>{eachProduct.description}</p>
              <p>{eachProduct.price}</p>
              <button className='button' onClick={() => this.handleAddToCart(eachProduct)}>
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
