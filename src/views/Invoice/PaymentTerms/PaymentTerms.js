import React from "react";

const PaymentTerms = () => {
  return (
    <div className="row mt-5 mb-3">
      <div className="col-lg-3 col-sm-12 col-md-6 ps-5 fw-bold d-flex align-items-center">
        Payment Terms<i className="fas fa-chevron-down ms-2"></i>
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="row">
              <div className="col-4">
                <input type="checkbox"></input>{" "}
              </div>
              <div className="col-8 fw-bold">Cash</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="row">
              <div className="col-4">
                <input type="checkbox"></input>{" "}
              </div>
              <div className="col-8 fw-bold">Check</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="row">
              <div className="col-4">
                <input type="checkbox"></input>{" "}
              </div>
              <div className="col-8 fw-bold">Credit</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="row">
              <div className="col-4">
                <input type="checkbox"></input>{" "}
              </div>
              <div className="col-8 fw-bold">Multiple</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default PaymentTerms;
