/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#f3f9ff",
          "200": "#edf5ff",
          "300": "#eaf5ff",
        },
        white: "#fff",
        gray: {
          "100": "#1c1c1c",
          "200": "rgba(0, 0, 0, 0.33)",
          "300": "rgba(255, 255, 255, 0.5)",
          "400": "rgba(25, 25, 25, 0.5)",
          "500": "rgba(255, 255, 255, 0.8)",
        },
        "colour-gray": "#8d9199",
        "colour-black": "#191919",
        royalblue: {
          "100": "#0077ff",
          "200": "rgba(0, 119, 255, 0.1)",
          "300": "rgba(0, 119, 255, 0.03)",
        },
        dimgray: "#4d4d4d",
        lightyellow: "#e8ffdf",
        limegreen: "#36bd00",
        cornflowerblue: {
          "100": "#269eff",
          "200": "rgba(38, 158, 255, 0.09)",
          "300": "rgba(38, 158, 255, 0.1)",
        },
        darkorange: {
          "100": "#f7941d",
          "200": "#ff8b00",
          "300": "rgba(247, 148, 29, 0.1)",
        },
        darkviolet: {
          "100": "#9d00ff",
          "200": "rgba(157, 0, 255, 0.08)",
        },
        darkslategray: "#454545",
        honeydew: "#e3fff1",
        oldlace: "#fff5e8",
        lavender: {
          "100": "#f6e6ff",
          "200": "#e7ebff",
          "300": "#d9dbe9",
        },
        darkslateblue: "#001f4e",
        lightgray: "#d1d1d1",
        mediumseagreen: "#43be83",
        red: {
          "100": "#ff2626",
          "200": "#e80000",
          "300": "rgba(255, 38, 38, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        body: "Sora",
        poppins: "Poppins",
        outfit: "Outfit",
        inter: "Inter",
        "text-single-300-bold": "'DM Sans'",
      },
      borderRadius: {
        "37xl": "56px",
        "15xl": "34px",
        "54xl": "73px",
        "45xl": "64px",
        "3xs": "10px",
        "10xl-7": "29.7px",
        "22xl": "41px",
        "32xl": "51px",
        "81xl": "100px",
        "23xl": "42px",
        "27xl": "46px",
        "7xs-6": "5.6px",
        "30xl": "49px",
        mini: "15px",
        sm: "14px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      lgi: "19px",
      "14xl": "33px",
      mid: "17px",
      lg: "18px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
