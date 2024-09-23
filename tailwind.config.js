/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "top-slight":
          "0 -1px 10px rgba(0, 0, 0, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        // First part is the slight top shadow, second part is the shadow-2xl
      },
      translate: {
        120: "120px", // Custom translate values
        130: "130px",
        140: "140px",
        150: "150px",
        160: "160px",
        170: "170px",
        180: "180px",
        200: "200px",
        220: "220px",
      },
    },
  },
  plugins: [],
};
