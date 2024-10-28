const filters = require("tailwindcss-filters");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(62, 162, 244, 0) 13.07%, rgba(66, 62, 244, 0.1) 103.18%)",
        "custom-gradient-icon":
          "linear-gradient(89deg, rgba(89,172,244,1) 0%, rgba(173,175,244,1) 100%)",
        "gradient-text":
          "linear-gradient(89deg, rgba(89,172,244,1) 0%, rgba(173,175,244,1) 100%)",

        "tier-1-round-lg":
          "linear-gradient(180deg, #777E90 6.23%, #FBFBFB 100%)",
        "tier-1-round-sm":
          "linear-gradient(180deg, #8D98C6 6.23%, #B3BEDC 100%)",
        "tier-1-round-xs":
          "linear-gradient(180deg, #707698 6.23%, #C7D2E8 100%)",
        "tier-2-round-lg":
          "linear-gradient(180deg, #04DB74 0%, #4EFDA9 30.73%, #07DCD0 60.94%, #07DCDC 100%)",
        "tier-2-round-sm":
          "linear-gradient(180deg, #04DB74 0%, #4EFDA9 30.73%, #07DCD0 60.94%, #07DCDC 100%)",
        "tier-2-round-xs":
          "linear-gradient(180deg, #04DB74 0%, #07DCD0 65%, #07DCDC 106.67%)",
        "tier-3-round-lg":
          "linear-gradient(180deg, #02D4E1 0%, #60B1FD 34.9%, #7059FF 68.75%, #01EB97 100%)",
        "tier-3-round-sm":
          "linear-gradient(180deg, #02D4E1 0%, #60B1FD 50.67%, #7059FF 100%)",
        "tier-3-round-xs":
          "linear-gradient(180deg, #02D4E1 0%, #60B1FD 50.67%, #7059FF 100%)",
        "tier-4-round-lg":
          " linear-gradient(179.82deg, #F38F10 2.83%, #FCC551 38.55%, #E16E04 52.87%, #CEBC1C 99.84%)",
        "tier-4-round-sm":
          "linear-gradient(180deg, #FFC24B 0%, #FA7B70 106.67%)",
        "tier-4-round-xs":
          "linear-gradient(180deg, #FA7B70 0%, #FFC24B 106.67%)",
        "tier-5-round-lg": "linear-gradient(180deg, #7059FF 0%, #8016F4 100%);",
        "tier-5-round-sm":
          "linear-gradient(180deg, #5E21F0 0%, #8016F4 50.67%, #7059FF 100%)",
        "tier-5-round-xs": "linear-gradient(180deg, #5024E6 0%, #AC06F0 100%)",
        "tier-6-round-lg":
          "linear-gradient(179.82deg, #F38F10 2.83%, #FCC551 38.55%, #E16E04 52.87%, #CEBC1C 99.84%)",
        "tier-6-round-sm": "linear-gradient(180deg, #BB15CE 0%, #FF6B00 100%)",
        "tier-6-round-xs":
          "radial-gradient(90% 90% at 40% 20%, #FA5547 0%, #AC06F0 100%)",
      },
      colors: {
        "main-color": "rgba(11, 14, 24, 1)",
        "custom-color": "rgba(192, 192, 201, 1)",
        "custom-link": "rgba(151, 207, 253, 1)",
        "custom-color-contact": "rgba(16, 20, 35, 1)",
        "custom-text-contact": "rgba(78, 174, 253, 1)",
        "custom-popup": "rgba(14, 19, 40, 0.07)",
      },
      borderColor: {
        "custom-border": "rgba(49, 56, 86, 1)",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      spacing: {
        17: "68px",
        line: "78px",
        shade: "300px",
        112: "112px",
        32: "32px",
      },
    },
  },
  plugins: [filters],
};
