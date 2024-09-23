import Button from "../components/Button";
import { useState, useEffect } from "react";

function Header() {
  const [isTabletOrLaptop, setIsTabletOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Check if the width is between 768px and 1440px (tablet and laptop sizes)
      if (width >= 768 && width <= 1440) {
        setIsTabletOrLaptop(true);
      } else {
        setIsTabletOrLaptop(false);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Listen for resize

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between pl-8 pr-4 h-[70px] shadow-md py-3 items-center">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#39B75D"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <img src="/img/handicon.png" className="w-[30px] h-[35px]" />
      </div>
      {isTabletOrLaptop && (
        <ul className="flex font-normal invisible text-base font-['Roboto'] xl:visible text-[#353a47] xl:gap-[23px] xl:w-[674px]">
          <li>Catalog</li>

          <li>
            <select id="how-it-works" className="w-[123px]">
              <option>How it works</option>
              <option>How Printify Works</option>
              <option>Print On Demand</option>
              <option>Printify Quality Promise</option>
              <option>What to Sell?</option>
            </select>
          </li>

          <li>Pricing</li>

          <li>Blog</li>

          <li>
            <select id="services" className="w-[83px]">
              <option>Services</option>
              <option>Printify Studio</option>
              <option>Printify Express Delivery</option>
              <option>Transfer Products</option>
              <option>Order In Bulk</option>
              <option>Experts Program</option>
            </select>
          </li>

          <li>
            <select id="need-help" className="w-[120px]">
              <option>Need help?</option>
              <option>Help Center</option>
              <option>Contacts</option>
              <option>My Requests</option>
            </select>
          </li>
        </ul>
      )}

      <div className="flex gap-3">
        <Button action="Log in" type="primary" />
        <Button action="Sign up" type="primary" />
      </div>
    </div>
  );
}

export default Header;
