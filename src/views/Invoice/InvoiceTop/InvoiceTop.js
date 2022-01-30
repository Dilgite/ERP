import React from "react";
import "./InvoiceTop.css";
const InvoiceTop = () => {
  return (
    <div className="top-container">
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-7 col-md-4 col-1"></div>
          <div className="col-lg-5 col-md-8 col-11  d-flex justify-content-evenly ">
            <button className="btn printButton">Print</button>
            <button className=" deleteButton">
              <i className="far fa-trash-alt deleteIcon ps-2 pe-2"></i>
            </button>
            <button className="btn saveAsDraft">Save As Draft</button>
            <button className=" save">Save</button>
            <i className="fas fa-chevron-down angleDown"></i>
          </div>
        </div>
      </div>
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
        <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">
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
