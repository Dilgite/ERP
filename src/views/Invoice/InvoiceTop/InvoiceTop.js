import React from "react";
import "./InvoiceTop.css";
const InvoiceTop = () => {
  return (
    <div className="top-container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">
         Series
          <br></br>
          <input type="text" required></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">
          Purchase Order Date
          <br></br>
          <input></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">
          Expected On
          <br></br>
          <input></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold" >
          Supplier
          <br></br>
          <input></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">
          Supplier Invoice Number
          <br></br>
          <input></input>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">
          Default Storage Location
          <br></br>
          <input></input>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTop;
