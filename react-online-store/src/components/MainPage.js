import React from 'react';
import ProductList from '../ProductList';

class MainPage extends React.Component {
  state = {
    products: [],
    cart: [],
    favorites: []
  };

  componentDidMount() {
    fetch('/product.json')
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  addToCart = (productName) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, productName]
    }));
  };

  addToFavorites = (productName) => {
    this.setState((prevState) => ({
      favorites: prevState.favorites.includes(productName)
        ? prevState.favorites.filter((name) => name !== productName)
        : [...prevState.favorites, productName]
    }));
  };

  render() {
    const { products, cart, favorites } = this.state;

    return (
      <div>
        <h1>Online Store</h1>
        <ProductList
          products={products}
          addToCart={this.addToCart}
          addToFavorites={this.addToFavorites}
          favoriteProducts={favorites}
        />
      </div>
    );
  }
}

export default MainPage;
