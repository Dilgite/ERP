import React from "react";

const Total = () => {
  return (
    <div className="row mt-5">
      <div className="col-6 ps-5">
          Total
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6">Total(BDT):</div>
          <div className="col-6">8230</div>
        </div>
        <div className="row">
          <div className="col-6">Discount(BDT):</div>
          <div className="col-6">240</div>
        </div>
        <div className="row">
          <div className="col-6">Taxes(BDT):</div>
          <div className="col-6">120</div>
        </div>
        <div className="row">
          <div className="col-6">Transport Cose(BDT):</div>
          <div className="col-6">120</div>
        </div>
        <div className="row">
          <div className="col-6">Grand Total(BDT):</div>
          <div className="col-6">10000</div>
        </div>

      </div>
    </div>
  );
};

export default Total;
