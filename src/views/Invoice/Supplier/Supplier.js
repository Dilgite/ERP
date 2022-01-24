import React from "react";
import './Supplier.css'

const Supplier = () => {
  return (
    <div className="row mt-5 ps-2">
      <div className="col-lg-2 col-md-6 col-sm-12 ps-4">
        <h5 className="fw-bold">Supplier Details <i className="fas fa-angle-down"></i></h5>
      </div>
      <div className="col-lg-9 col-md-12 col-sm-12">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="row supplier">
              <div className="col-sm-12 col-md-12 col-lg-4 fw-bold">Deliverd Person </div>
              <div className="col-sm-10 col-md-12 col-lg-8 "><input ></input></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="row supplier">
              <div className="col-sm-12 col-md-12 col-lg-4 fw-bold">Designation </div>
              <div className="col-sm-10 col-md-12 col-lg-8 "><input ></input></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="row supplier">
              <div className="col-sm-12 col-md-12 col-lg-4 fw-bold">Mobile No </div>
              <div className="col-sm-10 col-md-12 col-lg-8 "><input ></input></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
