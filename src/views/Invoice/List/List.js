import React, { useState } from "react";
import { orderList } from "../../../../src/dummyData/invoiceList";
import Total from "../Total/Total";
import "./List.css";



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
                  className="btn"
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className=" mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Item Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="supplierName"
                  />
                </div>
                <div className=" mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Storage Location
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="managingDirector"
                  />
                </div>
                <div className=" mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="mobileNo"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Rate
                  </label>
                  <input type="number" className="form-control " id="phoneNo" />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default List;
