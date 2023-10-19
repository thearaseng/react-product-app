import React, { useContext } from 'react';
import ProductTableRow from "./ProductTableRow";
import { ProductContext } from "../context/ProductContext";

export default function ProductList() {

  const { products } = useContext(ProductContext);

  return(
    <table className="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
      </tr>
      </thead>
      <tbody>
        {products.map(product => <ProductTableRow id={product.id} {...product} />)}
      </tbody>
    </table>
  );

}