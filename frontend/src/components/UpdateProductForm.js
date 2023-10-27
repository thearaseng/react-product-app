import React, {useContext, useEffect, useRef} from "react";
import {getProductById, updateProductById} from "../services/ApiService";
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {ProductContext} from "../context/ProductContext";

export default function UpdateProductForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const {product, updateProduct} = useContext(ProductContext);

  async function update(target) {
    target.preventDefault();

    try {
      const response = await updateProductById(id, product);
      navigate(`/${response.id}`);
    } catch (error) {
      console.error('Error', error);
    }
  }

  useEffect(() => {

    async function fetchData() {
      try {
        const product = await getProductById(id);
        updateProduct(product);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "title":
        updateProduct({...product, title: value});
        break;
      case "price":
        updateProduct({...product, price: value});
        break;
      case "quantity":
        updateProduct({...product, quantity: value});
        break;
      default:
        break;
    }
  };

  return(
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Products</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink active to={`/${id}`}>{id}</NavLink>
          </li>
          <li className="breadcrumb-item active">
            <NavLink active to={`/${id}/edit`}>edit</NavLink>
          </li>
        </ol>
      </nav>
      <form>
        <div className="mb-3 mt-5">
          <label htmlFor="title" className="form-label">Title</label>
          <input onChange={handleChange} value={product.title} type="text" className="form-control" id="title" aria-describedby="titleHelp" />
          <div id="titleHelp" className="form-text">Input the product title here.</div>
        </div>
        <div className="mb-3">

          <div className="row">
            <div className="col-6">
              <label htmlFor="price" className="form-label">Price</label>
              <input onChange={handleChange} value={product.price} type="number" className="form-control" id="price" />
            </div>
            <div className="col-6">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input onChange={handleChange} value={product.quantity} type="number" className="form-control" id="quantity" />
            </div>
          </div>

        </div>
        <button onClick={update} type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );

}