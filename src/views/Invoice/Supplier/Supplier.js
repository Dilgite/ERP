import React from "react";

const Supplier = () => {
  return (
    <div className="row mt-5 ms-3">
      <div className="col-3">
        <h4>Supplier Details <i className=" ms-5 fas fa-angle-down"></i></h4>
      </div>
      <div className="col-9">
        <div className="row">
          <div className="col-4">
            Deliverd Person <input size={25}></input>
          </div>
          <div className="col-4">
            Designation <input  size={30}></input>
          </div>
          <div className="col-4">
            Mobile <input  size={30}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
