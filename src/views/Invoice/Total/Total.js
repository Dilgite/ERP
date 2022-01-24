import React from "react";
import { orderList } from "../../../../src/dummyData/invoiceList";
import './Total.css'

const Total = () => {

  var total = 0;
  orderList.map((pd) => (
    total = total + pd.quantity * pd.rate
  ))

  console.log(total);
  var discount = 150;
  var vatPercentage = 5;
  var vat = (total*vatPercentage)/100;
  var transportCost = 200;

  var grandTotal = total-discount+vat+transportCost;
  return (
    <div className="row mt-5">
      <div className="col-lg-6 col-md-3 col-sm-3 ps-5 fw-bold">
          Total
      </div>
      <div className="col-lg-6 col-md-9 col-sm-9 total-calculation">
        <div className="row">
          <div className="col-6 fw-bold">Total(BDT):</div>
          <div className="col-2 text-end">{total}</div>
        </div>
        <div className="row">
          <div className="col-6 fw-bold">Discount(BDT):</div>
          <div className="col-2 text-end">{discount}</div>
        </div>
        <div className="row">
          <div className="col-6 fw-bold">Taxes(BDT):</div>
          <div className="col-2 text-end">{vat}</div>
        </div>
        <div className="row">
          <div className="col-6 fw-bold">Transport Cose(BDT):</div>
          <div className="col-2 text-end">{transportCost}</div>
        </div>
        <div className="row">
          <div className="col-6 fw-bold">Grand Total(BDT):</div>
          <div className="col-2 text-end">{grandTotal}</div>
        </div>

      </div>
    </div>
  );
};

export default Total;
