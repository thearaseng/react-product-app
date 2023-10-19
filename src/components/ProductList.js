import React, {useContext, useEffect} from 'react';
import ProductTableRow from "./ProductTableRow";
import { ProductContext } from "../context/ProductContext";
import { getProducts } from "../services/ApiService"

export default function ProductList() {

  const { products, updateProducts } = useContext(ProductContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        updateProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

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
        {products.map(product => <ProductTableRow key={product.id} {...product} />)}
      </tbody>
    </table>
  );

}