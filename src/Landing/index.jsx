import React from "react";
import HeroSection from "../components/hero_section";
import { PlanPayOutCutomer } from "../components/plan_payouts_customers/index";
import  MoreWaysToPay  from "../components/more_way_to_pay/index";
import { EnvyPaymentMethods } from "../components/envy_payment_methods/Index";
import { SecureSetup } from "../components/secure_setup";
import EnvyPayStrip from '../components/envy_pay_stripe/index'


export const LandingPage = () => {
  return (
    <>
      <div style={{overflow:"hidden"}}>
        <HeroSection />
        <PlanPayOutCutomer />
        <MoreWaysToPay />
        <EnvyPaymentMethods />
        <EnvyPayStrip/>
        <SecureSetup/>
      </div>
    </>
  );
};
