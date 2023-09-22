import React from 'react'
import PayMethodIconsL from "../../../assets/images/left-cards.png"
import PayMethodIconsR from "../../../assets/images/right-card.png"
export const EnvyPaymentMethods = () => {
  return (
  <section className="card">
      <div className="container">
        <div className="row d-flex">
          <div className="col"><img src={PayMethodIconsL}/></div>
          <div className="col"><img src={PayMethodIconsR} /></div>
        </div>
        <p>Accept payments from all major cards, debit cards, Apple Pay, Google Pay, ACH/Bank and payment plans</p>
      </div>
    </section>
  )
}
