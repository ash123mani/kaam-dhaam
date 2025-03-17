import localFont from "next/font/local";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

const pNova: NextFontWithVariable = localFont({
  src: [
    {
      path: "../public/fonts/P_Nova-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/P_Nova-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/P_Nova-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/P_Nova-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-pNova",
  display: "swap",
});

export default pNova;
