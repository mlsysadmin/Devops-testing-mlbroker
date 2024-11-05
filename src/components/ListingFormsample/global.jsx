import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--font-inter: Inter;

/* font sizes */
--font-size-mini: 15px;
--font-size-xs: 12px;
--font-size-lg: 18px;
--font-size-3xs: 10px;
--font-size-smi: 13px;
--font-size-4xs: 9px;

/* Colors */
--color-white: #fff;
--color-red-100: #ff2626;
--color-red-200: #d90000;
--color-red-300: rgba(217, 0, 0, 0);
--color-red-400: rgba(217, 0, 0, 0.11);
--color-red-500: rgba(217, 0, 0, 0.26);
--color-red-600: rgba(255, 38, 38, 0.09);
--color-black: #000;
--color-gray-100: #8c9094;
--fill-icon: #222;
--color-gray-200: rgba(115, 117, 122, 0.31);
--color-gray-300: rgba(140, 144, 148, 0.31);
--color-gray-400: rgba(140, 144, 148, 0.43);
--color-gray-500: rgba(140, 144, 148, 0.29);
--color-gainsboro: #e6e6e6;
--color-steelblue: rgba(91, 139, 198, 0.07);
--color-darkgray-100: rgba(164, 161, 161, 0.33);
--color-darkgray-200: rgba(164, 161, 161, 0.3);

/* Gaps */
--gap-mini: 15px;
--gap-lgi: 19px;
--gap-7xl: 26px;
--gap-10xs: 3px;
--gap-2xs: 11px;
--gap-mid: 17px;
--gap-sm: 14px;
--gap-smi: 13px;
--gap-3xs: 10px;
--gap-6xs: 7px;
--gap-4xs: 9px;
--gap-5xs: 8px;
--gap-base: 16px;
--gap-8xs: 5px;
--gap-lg: 18px;
--gap-xs: 12px;
--gap-9xs: 4px;
--gap-4xl: 23px;
--gap-8xl: 27px;
--gap-7xs: 6px;
--gap-3xl: 22px;
--gap-11xl: 30px;
--gap-xl: 20px;

/* Paddings */
--padding-xl: 20px;
--padding-23xl: 42px;
--padding-2xl: 21px;
--padding-4xs: 9px;
--padding-3xs: 10px;
--padding-2xs: 11px;
--padding-mini: 15px;
--padding-lgi: 19px;
--padding-15xl: 34px;
--padding-4xl: 23px;
--padding-17xl: 36px;
--padding-6xs: 7px;
--padding-8xs: 5px;
--padding-10xs: 3px;
--padding-base: 16px;
--padding-5xs: 8px;
--padding-12xs: 1px;
--padding-7xs: 6px;
--padding-mid: 17px;
--padding-11xs: 2px;
--padding-9xs: 4px;
--padding-smi: 13px;
--padding-xs: 12px;
--padding-sm: 14px;
--padding-6xl: 25px;
--padding-5xl: 24px;
--padding-lg: 18px;
--padding-8xl: 27px;
--padding-3xl: 22px;
--padding-13xl: 32px;
--padding-27xl: 46px;
--padding-11xl: 30px;
--padding-31xl: 50px;
--padding-7xl: 26px;

/* Border radiuses */
--br-11xl: 30px;
--br-3xs: 10px;

}
`;