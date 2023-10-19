import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProducts = (products) => {
    setProducts(products)
  }

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
}