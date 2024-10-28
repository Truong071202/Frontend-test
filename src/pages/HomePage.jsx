import React from "react";
import ReferralOverview from "./../components/ReferralOverview";
import HowItWorks from "./../components/HowItWorks";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="bg-main-color ">
      <ReferralOverview />
      <HowItWorks />
      <Contact />
    </div>
  );
};

export default HomePage;
