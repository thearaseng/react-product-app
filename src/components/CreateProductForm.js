export default function CreateProductForm() {

  return(
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" aria-describedby="titleHelp" />
        <div id="titleHelp" className="form-text">Input the product title here.</div>
      </div>
      <div className="mb-3">

        <div className="row">
          <div className="col-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" />
          </div>
          <div className="col-6">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="number" className="form-control" id="quantity" />
          </div>
        </div>

      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );

}