import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const updateProducts = (products) => {
    setProducts(products)
  }

  const addProduct = (product) => {
    setProducts([... products, product]);
  }

  const updateProduct = (product) => {
    setProduct(product);
  }

  const removeProductById = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }

  return (
    <ProductContext.Provider value={{ products, product, updateProducts, updateProduct, removeProductById, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}