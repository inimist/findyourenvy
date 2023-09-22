import React from 'react'
import EnvyAppStoreIcon from "../../../assets/images/apple-app-icon.svg"
import EnvyPaymentsIcon from "../../../assets/images/payments.png"
import EnvyPayIcon from "../../../assets/images/pay.png"
import EnvyQrCodeIcon from "../../../assets/images/QR-code.png"
import EnvyPaidIcon from "../../../assets/images/paid-daily.png"

export const SecureSetup = () => {
  return (
    <>
      <section className="fast-secure">
        <div className="container">
          <div className="d-flex flex-d-column justify-content-center align-items-center">
            <h2>Fast & Secure Setup</h2>
            <img className="apple-app-icon" src={EnvyAppStoreIcon} />
          </div>
          <div className="mobiles-wrapper d-flex">
            <div className="mobile">
              <p>Start accepting<br/> payments in minutes.</p>
              <img src={EnvyPaymentsIcon} />
            </div>
            <div className="mobile">
              <p>Use your phone for <br/>Tap to Pay.</p>
              <img src={EnvyPayIcon} />
            </div>
            <div className="mobile">
              <p>Get paid by your own <br/>unique QR code.</p>
              <img src={EnvyQrCodeIcon} />
            </div>
            <div className="mobile">
              <p>Get Paid <br/>Daily</p>
              <img src={EnvyPaidIcon} />
            </div>
          </div>
        </div>
    </section>
      <section className="footer">
      <div className="container">
        <h2>Envy Pay FAQs</h2>
      </div>
    </section>
    </>
  )
}
