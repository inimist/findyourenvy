import React from 'react';
import { ClientsPaymentPlans } from "./ClientsPaymentPlans";
import { DailyPayouts } from "./DailyPayouts";
import { YourCustomers } from "./YourCustomers";
import "../../assets/css/morewaystopay.css"

export const PlanPayOutCutomer = () => {
  return (
    <section className="three-column-layout p1">
      <div className="container">
        <div className="row d-flex justify-content">
          <ClientsPaymentPlans />
          <DailyPayouts />
          <YourCustomers />
        </div>
      </div>
    </section>
  )
}
