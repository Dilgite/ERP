import React from "react";
import InvoiceTop from "./InvoiceTop/InvoiceTop";
import List from "./List/List";
import Supplier from "./Supplier/Supplier";
import SupplierDetails from "./SupplierDetails/SupplierDetails";

const Invoice = () => {
  return (
    <>
      <InvoiceTop></InvoiceTop>
      <Supplier></Supplier>
      <SupplierDetails></SupplierDetails>
      <List></List>
    </>
  );
};

export default Invoice;
