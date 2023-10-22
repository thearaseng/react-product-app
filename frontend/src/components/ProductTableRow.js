import { NavLink } from "react-router-dom";
import {deleteProductById} from "../services/ApiService";
import {useContext} from 'react';
import {ProductContext} from "../context/ProductContext";

export default function ProductTableRow ({id, title, price, quantity}) {

  const {removeProductById} = useContext(ProductContext);

  async function deleteProduct() {
    try {
      await deleteProductById(id);
      removeProductById(id);

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return(
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <div className="btn-group">
          <NavLink className="btn btn-info" to={`/${id}`}>View</NavLink>
          <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
          <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  );
}