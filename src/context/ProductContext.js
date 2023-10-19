import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {id: 1, title: 'iPhone', price: 200, quantity: 10},
    {id: 2, title: 'Android', price: 400, quantity: 88},
    {id: 3, title: 'Blackberry', price: 400, quantity: 33}
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}