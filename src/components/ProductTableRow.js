export default function ProductTableRow ({id, title, price, quantity}) {

  console.log(id);

  return(
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
}