import React from "react";
import ApterPayIcon from "../../../assets/images/afterpay.svg"
import KlarnaIcon from "../../../assets/images/klarna.svg"
export const ClientsPaymentPlans = () => {
  return (
    <>
      <div className="col">
        <div className="offer-wrapper">
            <div className="offer-text">
              <h2><span className="offer">Offer your clients </span>payment plans.</h2>
            </div>
          
          <div className="offer-images">
              <div className="box-wrapper d-flex justify-content-center">
              <div className="left-img"><img src={ApterPayIcon}/></div>
            <div className="right-img"><img src={KlarnaIcon}/></div>
              </div>
            </div>
         </div>
          <p>Your customers get what they <br/>want and need.</p>
          <p className="get">You get paid in full up front.</p>
          <p className="padding-bottom">Customers pay up to 6 weeks with no<br/> surprises or fees when paid on time.</p>
        </div>
    </>
  );
};
