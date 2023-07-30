import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { name, price, image, sku, color, addToCart, addToFavorites, isFavorite } = this.props;

    return (
      <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{`Price: $${price}`}</p>
        <p>{`SKU: ${sku}`}</p>
        <p>{`Color: ${color}`}</p>
        <button onClick={() => addToCart(name)}>Add to Cart</button>
        <button onClick={() => addToFavorites(name)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    );
  }
}

export default ProductCard;
