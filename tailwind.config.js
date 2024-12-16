/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#f97316",
      secondary: {
        100: "#E2E2D5",
        200: "#888883",
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
};
export const plugins = [];
