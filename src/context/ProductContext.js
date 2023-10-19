import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const updateProducts = (products) => {
    setProducts(products)
  }

  const updateProduct = (product) => {
    setProduct(product);
  }

  return (
    <ProductContext.Provider value={{ products, product, updateProducts, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
}