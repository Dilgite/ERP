import React, { useState } from "react";
import "./SupplierDetails.css";

const SupplierDetails = () => {
  return (
    <div className="supplierDetails mt-3">
      <div className="row">
        <div className="col-lg-11 col-md-11 col-sm-11">
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Supplier Name:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">SAM Trading</div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Managing Director:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">Mahbubur Rahman</div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Mobile Number:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">01712321332</div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Phone Number:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">+45890000000</div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Fax Number:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">+0123472834812</div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Email:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">abc@xyz.com</div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-5">Address:</div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              Cotton House(5th floor), House 2, Road 113/A
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 ">
          {" "}
          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
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
                    Supplier Details
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
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Supplier Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="supplierName"
                      />
                    </div>
                    <div className=" mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Managing Director
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        id="managingDirector"
                      />
                    </div>
                    <div className=" mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Mobile No
                      </label>
                      <input
                        type="number"
                        className="form-control "
                        id="mobileNo"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Phone No
                      </label>
                      <input
                        type="number"
                        className="form-control "
                        id="phoneNo"
                      />
                    </div>
                    <div className=" mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Fax No
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="faxNo"
                      />
                    </div>
                    <div className=" mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control "
                        id="email"
                      />
                    </div>
                    <div className=" mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        id="address"
                      />
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SupplierDetails;
