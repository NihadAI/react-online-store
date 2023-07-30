import React from 'react';

class Header extends React.Component {
  render() {
    const { cart, favorites } = this.props;

    return (
      <div className="header">
        <div className="cart-icon">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span>{cart.length}</span>
        </div>
        <div className="favorites-icon">
          <i className="fa fa-star" aria-hidden="true"></i>
          <span>{favorites.length}</span>
        </div>
      </div>
    );
  }
}

export default Header;
