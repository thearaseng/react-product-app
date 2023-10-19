import { NavLink } from "react-router-dom";

export default function ProductTableRow ({id, title, price, quantity}) {

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
          <button className="btn btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  );
}