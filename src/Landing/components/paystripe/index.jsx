import React from 'react'
import EnvyPayLogo from "../../../assets/images/envyPay.svg"
 const index = () => {
  return (
    <section className="Competitive-Fees">
    <div className="first-row d-flex">
      <div className="item1 bg-colr"><img src={EnvyPayLogo} width="70%" /></div>
      <div className="item2 brd-right"><h3>Square</h3></div>
      <div className="item3 brd-right"><h3>PayPal</h3></div>
      <div className="item4 brd-right"><h3>Venmo</h3></div>
      <div className="item5"></div>
    </div>
    <div className="second-row d-flex">
      <div className="item1 bg-colr"><h1>2.25% + .15¢</h1></div>
      <div className="item2 brd-right"><h3>2.9% +.30¢</h3></div>
      <div className="item3 brd-right"><h3>2.9% +.30¢</h3></div>
      <div className="item4 brd-right"><p>2% cash payments<br/>3% credit cards</p></div>
      <div className="item5"></div>
    </div>
  </section>
  )
}
export default index