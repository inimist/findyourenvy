import React from 'react'
import PayMethodIcons from "../../../assets/images/paymentmethod.png"
export const EnvyPaymentMethods = () => {
  return (
    <section className="card">
    <div className="container">
      <img src={PayMethodIcons} />
      <p>Accept payments from all major cards, debit cards, Apple Pay, Google Pay, ACH/Bank and payment plans</p>
    </div>
  </section>
  )
}
