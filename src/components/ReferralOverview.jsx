import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/ArrowRight.png";
import Star_1 from "../images/referral_icon/tier1/Star 12.png";
import Star_2 from "../images/referral_icon/tier2/Star 13.png";
import Star_3 from "../images/referral_icon/tier3/Star 15.png";
import Vector_3 from "../images/referral_icon/tier3/Vector (1).png";
import Star_4 from "../images/referral_icon/tier4/Star 14.png";
import Vector_4 from "../images/referral_icon/tier4/Vector.png";
import Shape_5 from "../images/referral_icon/tier5/Vector.png";
import Vector_5 from "../images/referral_icon/tier5/Vector1.png";
import Stick_5 from "../images/referral_icon/tier5/WhiteStick.png";
import Rectangle_1_5 from "../images/referral_icon/tier5/Rectangle 40752.png";
import Rectangle_2_5 from "../images/referral_icon/tier5/Rectangle 40751.png";
import LineChart from "./Chart";
import Shape_6 from "../images/referral_icon/tier6/Vector.png";
import Vector_6 from "../images/referral_icon/tier6/Vector2.png";
import Stick_6 from "../images/referral_icon/tier6/Vector (1).png";

const ReferralOverview = () => {
  return (
    <div className="bg-custom-gradient border-b border-custom-border w-full py-8">
      <div className="flex flex-col px-10 lg:flex-row lg:px-14  ">
        <div className="flex flex-col flex-1 gap-3 md:gap-5 text-white py-8 md:py-12 text-center md:text-start lg:self-start lg:text-start self-center ">
          <h1 className="text-xl xl:text-3xl lg:text-2xl font-bold">
            Unlock Rewards with the Copin
            <br /> Referral Program
          </h1>
          <p className="text-custom-color text-xs md:text-sm lg:text-base">
            Earn rebates and commissions by inviting friends.
            <br />
            Grow your network and benefit from our 6-tier reward system.
          </p>
          <Link className="flex flex-row w-max text-custom-link hover:underline items-center text-xs md:text-sm lg:text-base self-center md:self-start">
            View referral Ranking
            <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="text-white flex-1 flex-col">
          <div className="flex justify-center">
            <LineChart />
          </div>
          <div className="flex flex-row gap-6 md:gap-[43px] lg:gap-8 justify-center mt-3">
            <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-6 h-5 bg-tier-1-round-lg rounded-full flex items-center justify-center">
              <div
                style={{
                  boxShadow: "0px 0px 0px 0.99px rgba(0, 0, 0, 0.25) inset",
                }}
                className="lg:w-10 lg:h-10 md:w-9 md:h-9 w-4 h-4  bg-tier-1-round-sm rounded-full flex items-center justify-center relative"
              >
                <img src={Star_1} alt="" className="w-2 h-2 md:w-8 md:h-8" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-tier-1-round-xs w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                    <span className="text-xs md:text-sm lg:text-base font-semibold">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-6 h-5  bg-tier-2-round-lg rounded-full flex items-center justify-center">
              <div
                style={{
                  boxShadow: "0px 0px 0px 1.12px rgba(0, 0, 0, 0.25) inset",
                }}
                className="lg:w-10 lg:h-10 md:w-9 md:h-9 w-4 h-4  bg-tier-2-round-sm rounded-full flex items-center justify-center relative"
              >
                <img src={Star_2} alt="" className="w-2 h-2 md:w-8 md:h-8" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-tier-2-round-xs w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                    <span className="text-xs md:text-sm lg:text-base font-semibold">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-6 h-5  bg-tier-3-round-lg rounded-full flex items-center justify-center">
              <div
                style={{
                  boxShadow: "0px 0px 0px 1.03px rgba(0, 0, 0, 0.25) inset",
                }}
                className="lg:w-10 lg:h-10 md:w-9 md:h-9 w-4 h-4  bg-tier-3-round-sm rounded-full flex items-center justify-center relative"
              >
                <img
                  src={Star_3}
                  alt=""
                  className="w-2 h-2 md:w-8 md:h-8 z-2"
                />
                <img
                  src={Vector_3}
                  alt=""
                  className="absolute z-1 w-4 h-4 md:w-8 md:h-8 top-1/2"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-tier-3-round-xs w-2 h-2 md:w-5 md:h-5 rounded-full flex justify-center z-2">
                    <span className="text-xs md:text-sm lg:text-base font-semibold absolute top-[1px] md:top-1">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-6 h-5  bg-tier-4-round-lg rounded-full flex items-center justify-center">
              <div
                style={{
                  boxShadow: "0px 0px 0px 1.05px rgba(0, 0, 0, 0.25) inset",
                }}
                className="lg:w-10 lg:h-10 md:w-9 md:h-9 w-4 h-4  bg-tier-4-round-sm rounded-full flex items-center justify-center relative"
              >
                <img
                  src={Star_4}
                  alt=""
                  className="w-2 h-2 md:w-8 md:h-8 z-2"
                />
                <img
                  src={Vector_4}
                  alt=""
                  className="absolute z-1 w-4 h-4 md:w-8 md:h-8 top-1/2"
                />
                <div className="absolute inset-0 flex items-center justify-center z-2">
                  <div className="bg-tier-4-round-xs w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                    <span className="text-xs md:text-sm lg:text-base font-semibold absolute  top-[-2px] md:top-1">
                      4
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={Shape_5}
                alt=""
                className="w-17 h-17 absolute top-[-28px] md:top-[-10px]"
              />
              <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-6 h-5  bg-tier-5-round-lg rounded-full flex items-center justify-center relative">
                <div
                  style={{
                    boxShadow: "0px 0px 0px 1.06px rgba(0, 0, 0, 0.25) inset",
                  }}
                  className="lg:w-10 lg:h-10 md:w-9 md:h-9 w-4 h-4  bg-tier-5-round-sm rounded-full flex items-center justify-center relative"
                >
                  <img
                    src={Star_3}
                    alt=""
                    className="w-2 h-2 md:w-8 md:h-8 z-2"
                  />
                  <img
                    src={Stick_5}
                    alt=""
                    className="w-1 h-4 md:w-2 md:h-5 absolute z-2 top-2 md:top-[27px]"
                  />
                  <img
                    src={Vector_5}
                    alt=""
                    className="absolute z-1 h-4 w-4 md:h-8 md:w-8 top-1/2"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-2">
                    <div className="bg-tier-5-round-xs w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                      <span className="text-xs md:text-sm lg:text-base font-semibold absolute top-[-2px] md:top-[2px]">
                        5
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src={Rectangle_2_5}
                  alt=""
                  className="absolute h-shade bottom-[-15px]"
                />
                <img
                  src={Rectangle_1_5}
                  alt=""
                  style={{
                    backdropFilter: "blur(20.124248504638672px)",
                    background:
                      "linear-gradient(180deg, #1E94F4 0%, rgba(6, 33, 206, 0) 100%);",
                    clipPath: "polygon(-15% 0%, 115% 0%, 65% 100%, 35% 100%)",
                  }}
                  className="absolute h-shade bottom-[-8px] opacity-[0.3]"
                />
              </div>

              <div className="absolute w-px bg-white h-line bottom-3 md:bottom-[38px] left-1/2 transform -translate-x-1/2 translate-y-[-10px]"></div>
            </div>
            <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-6 h-5  bg-tier-6-round-lg rounded-full flex items-center justify-center">
              <img
                src={Shape_6}
                alt=""
                className="w-10 h-10 md:w-17 md:h-17 absolute"
              />

              <div
                style={{
                  boxShadow: "0px 0px 0px 0.99px rgba(0, 0, 0, 0.25) inset",
                }}
                className="lg:w-10 lg:h-10 md:w-9 md:h-9 w-4 h-4  bg-tier-6-round-sm rounded-full flex items-center justify-center relative"
              >
                <img
                  src={Star_4}
                  alt=""
                  className="w-2 h-2 md:w-8 md:h-8 z-2"
                />
                <img
                  src={Stick_6}
                  alt=""
                  className="w-2 h-3 md:w-4 md:h-5 absolute z-2 top-4 md:top-[27px]"
                />
                <img
                  src={Vector_6}
                  alt=""
                  className="absolute z-1 w-6 h-6 md:h-8 md:w-8 top-1/2"
                />
                <div className="absolute inset-0 flex items-center justify-center z-2">
                  <div className="bg-tier-6-round-xs w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                    <span className="text-xs md:text-sm lg:text-base font-semibold absolute top-[-2px] md:top-[3px]">
                      6
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-white transform rotate-45 bottom-3 right-5 md:bottom-[17px] md:right-[37px]"></div>
                <div className="absolute w-[2px] h-[2px] md:w-[4px] md:h-[4px] bg-white transform rotate-45 top-[-2px] right-4 md:top-[2px] md:right-[38px]"></div>
                <div className="absolute w-[2px] h-[2px] md:w-[4px] md:h-[4px] bg-white transform rotate-45 top-4 right-5 md:top-[27px] md:right-[40px]"></div>
                <div className="absolute w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-white transform rotate-45 bottom-3 right-[-2px] md:bottom-[17px] md:right-[2px]"></div>
                <div className="absolute w-[2px] h-[2px] md:w-[4px] md:h-[4px] bg-white transform rotate-45 top-3 right-[-4px] md:top-[20px] md:right-[-3px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralOverview;
