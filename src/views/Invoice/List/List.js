import React, { useState } from "react";
import { orderList } from "../../../../src/dummyData/invoiceList";
import "./List.css";

var total = 0;

const List = () => {
  const calculate = (quantity, rate) => {
    total = total + quantity * rate;
    console.log(total);
    return quantity * rate;
  };

  const [id, setId] = useState({});

  return (
    <div className="tableContainer">
      <table className="table mt-5 mx-auto">
        <tr>
          <th>
            <input type="checkbox"></input> No
          </th>
          <th>Item Name</th>
          <th className="text-end">Storage Location</th>
          <th className="text-end">Quantity</th>
          <th className="text-end">Rate</th>
          <th className="text-end">Total Amount</th>
          <th className="text-end"></th>
        </tr>
        <tbody>
          {orderList.map((pd) => (
            <tr key={pd.id}>
              <td>
                {" "}
                <input type="checkbox"></input> {pd.id}
              </td>
              <td>{pd.itemName}</td>
              <td className="text-end">{pd.storageLocation}</td>
              <td className="text-end">{pd.quantity}</td>
              <td className="text-end">{pd.rate}</td>
              <td className="text-end">{calculate(pd.rate, pd.quantity)}</td>
              <td className="text-end">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setId(pd)}
                >
                  Edit
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title{console.log(id)}
                        </h5>

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body"></div>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
