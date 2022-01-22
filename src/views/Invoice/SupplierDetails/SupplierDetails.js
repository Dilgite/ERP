import React from "react";
import './SupplierDetails.css'

const SupplierDetails = () => {
  return (
    <div className="supplierDetails mt-5">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-2">Supplier Name:</div>
            <div className="col-2">SAM Trading</div>
          </div>
          <div className="row">
            <div className="col-2">Managing Director:</div>
            <div className="col-4">Mahbubur Rahman</div>
          </div>
          <div className="row">
            <div className="col-2">Mobile Number:</div>
            <div className="col-4">01712321332</div>
          </div>
          <div className="row">
            <div className="col-2">Phone Number:</div>
            <div className="col-4">+45890000000</div>
          </div>
          <div className="row">
            <div className="col-2">Fax Number:</div>
            <div className="col-4">+0123472834812</div>
          </div>
          <div className="row">
            <div className="col-2">Email:</div>
            <div className="col-4">abc@xyz.com</div>
          </div>
          <div className="row">
            <div className="col-2">Address:</div>
            <div className="col-4">Cotton House(5th floor), House 2, Road 113/A</div>
          </div>
        </div>
        <div className="col-3"> </div>
      </div>
    </div>
  );
};

export default SupplierDetails;
