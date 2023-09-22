import React from "react";
import HeroSection from "./components/hero-section";
import { PlanPayOutCutomer } from "./components/plan-payouts-customers";
import  MoreWaysToPay  from "./components/more-ways-to-pay";
import {EnvyPaymentMethods}  from "./components/payment-methods";
import { SecureSetup } from "./components/secure-setup";
import EnvyPayStrip from './components/paystripe'


export const LandingPage = () => {
  return (
    <>
      <div>
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
