import React from 'react';
import EnvyStripeLogo from "../../../assets/images/envy-pay-stripe-logo.png"
import AppleAppIcon from "../../../assets/images/apple-app-icon.svg"


export const HeroSection = () => {
  return (
   <>
   <section className="banner-section">
      <div className="container">
          <div className="left-box">
            <img src={EnvyStripeLogo} />
            <p className="lowest">The lowest rate for local service providers</p>
            <h2>2.25% + .15¢</h2>
            <span>No monthly fees</span>
            <div className="bottom-text">
            <p>Accept contactless payments and offer convenient payment plans to attract and retain customers.</p>
            <img src={AppleAppIcon} />
            <p>Say goodbye to excessive costs and hello to increased profitability.</p>
          </div>
          </div>
      </div>
   </section>
   </>
  )
}
