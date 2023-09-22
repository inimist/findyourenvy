import React from 'react'
import EnvyAppStoreIcon from "../../../assets/images/apple-app-icon.svg"
import EnvyPaymentsIcon from "../../../assets/images/payments.png"
import EnvyPayIcon from "../../../assets/images/pay.png"
import EnvyQrCodeIcon from "../../../assets/images/QR-code.png"
import EnvyPaidIcon from "../../../assets/images/paid-daily.png"

export const SecureSetup = () => {
  return (
    <>
      <section class="fast-secure">
        <div class="container">
          <h2>Fast & Secure Setup</h2>
          <img src={EnvyAppStoreIcon} />
          <div class="mobiles-wrapper d-flex">
            <div class="mobile">
              <p>Start accepting<br/> payments in minutes.</p>
              <img src={EnvyPaymentsIcon} />
            </div>
            <div class="mobile">
              <p>Use your phone for <br/>Tap to Pay.</p>
              <img src={EnvyPayIcon} />
            </div>
            <div class="mobile">
              <p>Get paid by your own <br/>unique QR code.</p>
              <img src={EnvyQrCodeIcon} />
            </div>
            <div class="mobile">
              <p>Get Paid <br/>Daily</p>
              <img src={EnvyPaidIcon} />
            </div>
          </div>
        </div>
    </section>
      <section class="footer">
      <div class="container">
        <h2>Envy Pay FAQs</h2>
      </div>
    </section>
    </>
  )
}
