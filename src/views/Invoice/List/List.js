import React, { useState } from "react";
import { orderList } from "../../../../src/dummyData/invoiceList";
import Total from "../Total/Total";
import "./List.css";
import dano from "../../../images/dano.jpeg";
const List = () => {
  var total = 0;
  const calculate = (quantity, rate) => {
    total = total + quantity * rate;
    console.log(total);
    return quantity * rate;
  };

  const [id, setId] = useState({});

  return (
    <div className="tableContainer">
      <table className="table mt-5 mx-auto">
        <thead>
          <tr>
            <th>
              <input className="list" type="checkbox"></input> No
            </th>
            <th>Item Name</th>
            <th className="text-end">Storage Location</th>
            <th className="text-end">Quantity</th>
            <th className="text-end">Rate</th>
            <th className="text-end">Total Amount</th>
            <th className="text-end"></th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((pd) => (
            <tr key={pd.id}>
              <td data-label="No">
                {" "}
                <input className="list" type="checkbox"></input> {pd.id}
              </td>
              <td data-label="ItemName">{pd.itemName}</td>
              <td data-label="Storage" className="text-end">
                {pd.storageLocation}
              </td>
              <td data-label="Quantity" className="text-end">
                {pd.quantity}
              </td>
              <td data-label="Rate" className="text-end">
                {pd.rate}
              </td>
              <td data-label="Total" className="text-end">
                {calculate(pd.rate, pd.quantity)}
              </td>
              <td data-label="Edit" className="text-end">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  onClick={() => setId(pd)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="d-flex justify-content-between pt-2 px-3">
              <h5 className="modal-title" id="exampleModalLabel">
                Editing Row#1
              </h5>

              <div className="gx-5">
                <button className=" deleteButton me-3">
                  <i className="far fa-trash-alt deleteIcon"></i>
                </button>
                <button className=" save me-3">Save</button>
                <button>
                  {" "}
                  <i className="fas fa-chevron-down angleDown"></i>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label pt-2"
                      >
                        Item Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="supplierName"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label pt-2"
                      >
                        Bar Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="supplierName"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label pt-2"
                      >
                        Item Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="supplierName"
                      />
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Menufactur Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Quantity
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Unit of Measure/Purchase By
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Purchase Rate(Taka)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2" 
                        >
                          Total Amount(Taka)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                        <p>Item Tax(Taka)</p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                        <div className="d-flex justify-content-start bg-danger">
                          <input type="checkbox" id="value1" name="" value="" />
                          <label for="value1">Allow Zero Valuation Rate </label>
                          <br></br>
                        </div>
                        <div className="d-flex justify-content-start bg-danger">
                          <input type="checkbox" id="value2" name="" value="" />
                          <label for="value2">Sample Item </label>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-lg-5 col-md-3 col-sm-0"></div>
                      <div className="col-lg-7 col-md-9 col-sm-12 pt-2">
                        <img width="180px" height="175px" src={dano} alt="" />

                        <input type="checkbox" id="value3" name="" value="" /><label for="value3">
                          This item is available for sale{" "}
                        </label>

                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Expiry Alert
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                         <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Quantity In Stock
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                         <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Last Purchase Rate(Taka)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                         <label
                          htmlFor="exampleInputEmail1"
                          className="form-label pt-2"
                        >
                          Sale Price(Taka)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="supplierName"
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
