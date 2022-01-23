import React from 'react';

const PaymentTerms = () => {
    return (
        <div className='row mt-5 mb-3'>
        <div className='col-3 ps-5'>Payment Terms <i className=" ms-5 fas fa-angle-down"></i></div>
        <div className='col-6'>
        <div className='row'>
        <div className='col-3'><input type="checkbox"></input> Cash</div>
        <div className='col-3'><input type="checkbox"></input> Check</div>
        <div className='col-3'><input type="checkbox"></input> Credit</div>
        <div className='col-3'><input type="checkbox"></input> Mutiple</div>
        </div>
        </div>
        <div className='col-3'></div>
            
        </div>
    );
};

export default PaymentTerms;