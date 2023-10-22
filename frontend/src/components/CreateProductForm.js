import React, {useContext, useRef} from "react";
import {createProduct} from "../services/ApiService";
import {useNavigate} from'react-router-dom';
import {ProductContext} from "../context/ProductContext";

export default function CreateProductForm() {

  const navigate = useNavigate();
  const titleRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const {addProduct} = useContext(ProductContext);

  async function add(target) {
    target.preventDefault();

    try {

      const newProduct = {
        title: titleRef.current.value,
        price: priceRef.current.value,
        quantity: quantityRef.current.value
      };

      console.log(newProduct)

      const response = await createProduct(newProduct);
      console.log(response)
      addProduct(response);
      navigate(`/${response.id}`);

    } catch (error) {
      console.error('Error', error);
    }
  }

  return(
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="title" className="form-label">Title</label>
        <input ref={titleRef} type="text" className="form-control" id="title" aria-describedby="titleHelp" />
        <div id="titleHelp" className="form-text">Input the product title here.</div>
      </div>
      <div className="mb-3">

        <div className="row">
          <div className="col-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input ref={priceRef} type="number" className="form-control" id="price" />
          </div>
          <div className="col-6">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input ref={quantityRef} type="number" className="form-control" id="quantity" />
          </div>
        </div>

      </div>
      <button onClick={add} type="submit" className="btn btn-primary">Add</button>
    </form>
  );

}