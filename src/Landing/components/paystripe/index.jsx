import React from 'react'
import EnvyPayLogo from "../../../assets/images/envyPay.svg"
 const index = () => {
  return (
      <section className="Competitive-Fees">
        <div className="top-box">
          <h2>Competitive Processing Fees</h2>
          <p>Best local services payment processor comparison</p>
        </div>
        <div className="table">
          <div className="envy-wrapper d-block col-padding w-30">
          <div className="col bg-colr box-padding-top"><img className="w-70" src={EnvyPayLogo}/></div>
          <div className="col bg-colr box-padding-bottom"><h2>2.25% + .15¢</h2></div>
        </div>
        
        <div className="envy-wrapper phone-col-width brd-right w-20">
          <div className="col"><h3>Square</h3></div>
          <div className="col"><p>2.9% +.30¢</p></div>
        </div>
        <div className="envy-wrapper phone-col-width brd-right w-20">
          <div className="col"><h3>PayPal</h3></div>
          <div className="col"><p>2.9% +.30¢</p></div>
        </div>
        <div className="envy-wrapper phone-col-width brd-right w-20">
          <div className="col"><h3>Venmo</h3></div>
          <div className="col"><p className="span">2% cash payments<br/>3% credit cards</p></div>
        </div>
        <div className="envy-wrapper blank-box w-10">
          <div className="col"></div>
          <div className="col"></div>
        </div>

        </div>
    </section>
  )
}
export default index