import React from "react";
import InvoiceTop from "./InvoiceTop/InvoiceTop";
import List from "./List/List";
import PaymentTerms from "./PaymentTerms/PaymentTerms";
import Supplier from "./Supplier/Supplier";
import SupplierDetails from "./SupplierDetails/SupplierDetails";
import Total from "./Total/Total";

const Invoice = () => {
  return (
    <>
      <InvoiceTop></InvoiceTop>
      <Supplier></Supplier>
      <SupplierDetails></SupplierDetails>
      <List></List>
      <Total></Total>
      <PaymentTerms></PaymentTerms>
    </>
  );
};

export default Invoice;
