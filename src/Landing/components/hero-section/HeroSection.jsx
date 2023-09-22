import React, {useEffect, useState} from 'react';
import EnvyStripeLogo from "../../../assets/images/envy-pay-stripe-logo.png"
import AppleAppIcon from "../../../assets/images/apple-app-icon.svg"


export const HeroSection = () => {
  return (
   <>
   <section className="banner-section">
      <div className="container">
          <div className="left-box">
            <img src={EnvyStripeLogo} />
            <div className="lowest-rate">
              <p className="lowest">The lowest rate for local service providers</p>
            </div>
            <div className="bottom-content">
                <div className="box-1">
                <h2>2.25% <span className="plus-sign">+</span> .15¢</h2>
                <span>No monthly fees</span>
                <p className="accept">Accept contactless payments and offer convenient payment plans to attract and retain customers.</p>
                <img src={AppleAppIcon} />
                </div>
                <div className="box-2">
                <p>Say goodbye to excessive costs and hello to increased profitability.</p>
              </div>
            </div>
          </div>
      </div>
   </section>
   </>
  )
}
