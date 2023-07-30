import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, addToCart, addToFavorites, favoriteProducts } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            {...product}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            isFavorite={favoriteProducts.includes(product.name)}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
