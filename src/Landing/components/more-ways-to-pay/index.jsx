import React from 'react'
import MoneyTtransferIcon from "../../assets/images/money-transfer.png"
 const MoreWaysPay = () => {
  return (
    <section className="give-your-client">
      <div className="container">
        <div className="client-box d-flex">
          <div className="left-box">
            <img src={MoneyTtransferIcon} />
          </div>
          <div className="right-box">
            <h2>Give your clients more ways to pay with pay links or a QR code</h2>
          </div>
        </div>
      </div>
  </section>
  )
}
export default MoreWaysPay