import React from "react";
import "./InvoiceTop.css";
const InvoiceTop = () => {
  return (
    <div className="top-container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <label>Series</label>
          <br></br>
          <input type='text'  required></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          Purchase Order Date<br></br>
          <input ></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          Expected On
          <br></br>
          <input ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          Supplier
          <br></br>
          <input ></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          Supplier Invoice Number
          <br></br>
          <input ></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          Default Storage Location
          <br></br>
          <input ></input>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTop;
