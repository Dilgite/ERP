import React from "react";
import SupplierDetails from "../SupplierDetails/SupplierDetails";
import "./Supplier.css";

const Supplier = () => {
  return (
    <div>
      <div className="row mt-5 ps-2">
        <div className="col-lg-2 col-md-6 col-sm-12 ps-4">
          <h5 className="fw-bold">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="d-flex detailsButton fw-bold collapsed align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Supplier Details<i className="fas fa-chevron-down ms-2 "></i>
                  </button>
                </h2>
              </div>
            </div>
          </h5>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="row supplier">
                <div className="col-sm-12 col-md-12 col-lg-4 fw-bold">
                  Deliverd Person{" "}
                </div>
                <div className="col-sm-10 col-md-12 col-lg-8 ">
                  <input></input>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="row supplier">
                <div className="col-sm-12 col-md-12 col-lg-4 fw-bold">
                  Designation{" "}
                </div>
                <div className="col-sm-10 col-md-12 col-lg-8 ">
                  <input></input>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="row supplier">
                <div className="col-sm-12 col-md-12 col-lg-4 fw-bold">
                  Mobile No{" "}
                </div>
                <div className="col-sm-10 col-md-12 col-lg-8 ">
                  <input></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <SupplierDetails></SupplierDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
