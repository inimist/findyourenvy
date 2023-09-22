import React from "react";
import "../../assets/css/clientspaymentplans.css";
import ApterPayIcon from "../../assets/images/afterpay.svg"
import KlarnaIcon from "../../assets/images/klarna.svg"
export const ClientsPaymentPlans = () => {
  return (
    <>
      <div className="col">
          <h2>Offer your clients payment plans.</h2>
          <div className="box-wrapper d-flex justify-content-center">
            <div className="left-img"><img src={ApterPayIcon}/></div>
            <div className="right-img"><img src={KlarnaIcon}/></div>
          </div>
          <p>Your customers get what they <br/>want and need.</p>
          <p>You get paid in full up fronts.</p>
          <p>Customers pay up to 6 weeks with no<br/> surprises or fees when paid on time.</p>
        </div>
    </>
  );
};
