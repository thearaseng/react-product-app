import React, {useEffect, useContext} from "react";
import {NavLink, useParams} from "react-router-dom";
import {getProductById} from "../services/ApiService";
import {ProductContext} from "../context/ProductContext";

export default function ProductDetail() {

  const { id } = useParams();
  const { product, updateProduct } = useContext(ProductContext);

  useEffect(() => {

    async function fetchData() {
      try {
        const product = await getProductById(id);
        updateProduct(product);
        console.log(product);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return(
    <div>
      <h4 className="text-center mb-5 mt-5">Product Info: {id}</h4>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">Title</th>
          <td>{product.title}</td>
        </tr>
        <tr>
          <th scope="row">Price</th>
          <td>{product.price}</td>
        </tr>
        <tr>
          <th scope="row">Quantity</th>
          <td>{product.quantity}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <div className="row">
          <div className="col-6">
            <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-danger pull-right">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );

}