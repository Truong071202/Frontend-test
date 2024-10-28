import React from "react";
import Lightbulb from "../images/LightbulbFilament.png";
import BoundingBox from "../images/BoundingBox.png";
import UsersFour from "../images/UsersFour.png";
import TreasureChest from "../images/TreasureChest.png";
import MedalMilitary from "../images/MedalMilitary.png";

const HowItWorks = () => {
  return (
    <div className="flex flex-col text-white mx-6 my-4 gap-4">
      <div className="flex flex-row items-center">
        <img src={Lightbulb} alt="lightbulb" className="w-6 h-6 mr-2" />
        <h3>How It Works?</h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        <div className="border border-custom-border rounded">
          <div className="p-5">
            <div className="bg-custom-gradient-icon bg-blend-overlay w-12 h-12 md:w-14 md:h-14  border-white relative rounded-sm">
              <img
                src={BoundingBox}
                alt="Bounding box"
                className="w-6 h-6 md:w-8 md:h-8 absolute inset-0 m-auto"
              />
            </div>
            <h3 className="my-3">1. Two-Level Referral System</h3>
            <p className="text-sm text-custom-color">
              Invite friends and earn from two levels: F1 (your referrals) and
              F2 (their referrals)
            </p>
          </div>
        </div>
        <div className="border border-custom-border rounded">
          <div className="p-5">
            <div className="bg-custom-gradient-icon bg-blend-overlay w-12 h-12 md:w-14 md:h-14 border-white relative rounded-sm">
              <img
                src={UsersFour}
                alt="Bounding box"
                className="w-6 h-6 md:w-8 md:h-8 absolute inset-0 m-auto"
              />
            </div>
            <h3 className="my-3">2. Earn Rebates & Commissions</h3>
            <p className="text-sm text-custom-color">
              Earn rebates on your trades and commissions from F1 and F2.
            </p>
          </div>
        </div>
        <div className="border border-custom-border rounded">
          <div className="p-5">
            <div className="bg-custom-gradient-icon bg-blend-overlay w-12 h-12 md:w-14 md:h-14 border-white relative rounded-sm">
              <img
                src={TreasureChest}
                alt="Bounding box"
                className="w-6 h-6 md:w-8 md:h-8 absolute inset-0 m-auto"
              />
            </div>
            <h3 className="my-3">3. Claim Daily Rewards</h3>
            <p className="text-sm text-custom-color">
              Rewards are credited after trades close and claimable daily at
              0:00 UTC.
            </p>
          </div>
        </div>
        <div className="border border-custom-border rounded">
          <div className="p-5">
            <div className="bg-custom-gradient-icon bg-blend-overlay w-12 h-12 md:w-14 md:h-14 border-white relative rounded-sm">
              <img
                src={MedalMilitary}
                alt="Bounding box"
                className="w-6 h-6 md:w-8 md:h-8 absolute inset-0 m-auto"
              />
            </div>
            <h3 className="my-3">4. Referral Tier System</h3>
            <p className="text-sm text-custom-color">
              Your tier is based on total fees paid by F0, F1, and F2 over the
              last 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
