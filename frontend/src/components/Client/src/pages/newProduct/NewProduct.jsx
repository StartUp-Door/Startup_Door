import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Service Type</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Service Type</label>
          <input type="text" placeholder="Saman kumara" />
        </div>
        <div className="addProductItem">
          <label>Avaialablity (Per Month) </label>
          <input type="text" placeholder="12" />
        </div>
        <div className="addProductItem">
          <label>Daily Cost </label>
          <input type="text" placeholder="Rs 2400" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
