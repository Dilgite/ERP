import React from "react";
import './Supplier.css'

const Supplier = () => {
  return (
    <div className="row mt-5 ps-3 px-3 py-3 my-3">
      <div className="col-lg-2 col-md-6 col-sm-12">
        <h5>Supplier Details <i className=" ms-5 fas fa-angle-down"></i></h5>
      </div>
      <div className="col-lg-10 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="row supplier">
              <div className="col-4">Deliverd Person </div>
              <div className="col-8"><input className="w-100"></input></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="row supplier">
              <div className="col-4">Designation </div>
              <div className="col-8"><input ></input></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="row supplier">
              <div className="col-4">Mobile No </div>
              <div className="col-8"><input ></input></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
