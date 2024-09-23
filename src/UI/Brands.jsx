import { useState, useEffect } from "react";

const patners = [
  "https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg",
  "https://printify.com/pfh/media/squarespace-FIBF2RIF.svg",
  "https://printify.com/pfh/media/wix-MWZCZDTE.svg",
  "https://printify.com/pfh/media/woo-PGFAG65X.svg",
  "https://printify.com/pfh/media/shopify-3NAPXPBF.svg",
  "https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg",
  "https://printify.com/pfh/media/etsy-MXXFYORZ.svg",
  "https://printify.com/pfh/media/printify-E3TBSF5R.svg",
  "https://printify.com/pfh/media/presta-54F6AYUU.svg",
  "https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg",
];

function Brands() {
  // State to track whether we should move elements back to default
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentSection = document.getElementById("brands-section");
      const rect = componentSection.getBoundingClientRect();

      // Check if the section is in the viewport and only update once
      if (rect.top >= 0 && rect.bottom <= window.innerHeight && !hasScrolled) {
        setHasScrolled(true); // Mark as scrolled after the first scroll
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div
      id="brands-section"
      className="relative mb-[40px]  xl:flex xl:flex-col xl:justify-center xl:items-center bg-[#FFFFFF]"
    >
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-[32px] text-[#17262b] leading-10 font-['CerebriSans'] text-center xl:text-[40px] xl:leading-[56px] xl:tracking-[-1px]">
          connect your store
        </h1>
        <p className="font-normal text-base text-[#485256] font-['Roboto'] text-center">
          Printify easily integrates with major e-commerce platforms and market
          places
        </p>
      </div>
      <div className="w-[330px] h-[330px] relative    xl:bg-[url('https://printify.com/pfh/media/stores-background-QSGENTOX.svg')] xl:w-[1280px] xl:mt-[40px] xl:h-[550px] xl:pl-[400px] xl:bg-center xl:bg-cover">
        {/* The green element */}
        <div className="xl:w-[1280px]">
          <div className="bg-[#18C75A] z-10 shadow-top-slight w-[66px] h-[66px] flex justify-center items-center rounded-xl absolute top-[170px] left-[140px] xl:top-[130px] xl:left-[605px] xl:w-[143px] xl:h-[143px] xl:transition-transform xl:duration-500 xl:hover:scale-110 ">
            <img
              src={patners[7]}
              className="w-[18px] h-[26px] xl:w-[44px] xl:h-[60px]"
            />
          </div>

          {/* Other elements that will be hidden behind */}
          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0"
                : "translate-x-[40px] translate-y-[80px] z-[-1]"
            } w-[55px] h-[55px] flex justify-center items-center rounded-xl absolute top-[105px] left-[100px] shadow-top-slight xl:top-[15px] xl:left-[460px] xl:w-[85px] xl:h-[85px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[0]}
              className="w-[26px] h-[26px] xl:w-[40px] xl:h-[40px]"
            />
          </div>

          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0"
                : "translate-x-[-20px] translate-y-[60px]  z-[-1]"
            } w-[50px] h-[50px] flex justify-center items-center absolute top-[115px] left-[170px] rounded-xl shadow-top-slight xl:w-[108px] xl:h-[108px] xl:top-[40px] xl:left-[820px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[1]}
              className="w-[48px] h-[48px] xl:w-[65px] xl:h-[65px]"
            />
          </div>

          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0"
                : "translate-x-[-87px] translate-y-[80px] z-[-1]"
            } w-[60px] h-[60px] flex justify-center items-center rounded-xl absolute shadow-top-slight top-[95px] left-[230px] xl:top-[-70px] xl:left-[1140px] xl:w-[108px] xl:h-[108px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img src={patners[2]} className="w-[36px] h-[16px] " />
          </div>
          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0 shadow-top-slight"
                : "translate-x-[-150px] translate-y-[-100px] z-[-1]"
            } w-[50px] h-[50px] flex justify-center items-center rounded-xl absolute shadow-top-slight top-[285px] left-[277px] xl:w-[82px] xl:h-[82px] xl:top-[190px] xl:left-[970px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[3]}
              className="w-[36px] h-[16px] xl:w-[43px] xl:h-[22px]"
            />
          </div>
          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0 shadow-top-slight"
                : "translate-x-[-30px] translate-y-[-105px] z-[-1]"
            } w-[65px] h-[70px] flex justify-center items-center  absolute top-[270px] left-[170px] rounded-xl xl:w-[155px] xl:h-[155px] xl:left-[670px] xl:top-[430px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[4]}
              className="w-[36px] h-[36px] xl:w-[66px] xl:h-[66px] "
            />
          </div>

          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0"
                : "translate-x-[37px] translate-y-[-50px] z-[-1]"
            } w-[26px] h-[26px] flex justify-center items-center rounded-full absolute top-[243px] left-[140px] shadow-top-slight xl:w-[83px] xl:h-[83px] xl:rounded-xl xl:left-[480px] xl:top-[430px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[5]}
              className="w-[26px] h-[26px] rounded-full xl:w-[50px] xl:h-[50px] xl:rounded-none"
            />
          </div>

          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0 shadow-top-slight"
                : "translate-x-[-110px] translate-y-[-20px]  z-[-1]"
            }  w-[80px] h-[80px] flex justify-center items-center rounded-md absolute  top-[192px] left-[230px] xl:left-[1080px] xl:top-[290px] xl:w-[170px] xl:h-[170px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[6]}
              className="w-[36px] h-[16px] xl:w-[70px] xl:h-[34px]"
            />
          </div>

          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0 shadow-top-slight"
                : "translate-x-[70px] translate-y-[-78px] z-[-1]"
            }  w-[66px] h-[66px] flex justify-center items-center rounded-xl absolute top-[250px] left-[70px] xl:w-[108px] xl:h-[108px] xl:left-[340px] xl:top-[260px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            <img
              src={patners[8]}
              className="w-[36px] h-[36px] xl:w-[42px] xl:h-[42px]"
            />
          </div>
          <div
            className={`transition-transform duration-500 ${
              hasScrolled
                ? "translate-x-0 translate-y-0 z-0 shadow-top-slight"
                : "translate-x-[70px] translate-y-[-78px] z-[-1]"
            } w-[55px] h-[55px] flex justify-center items-center rounded-md absolute top-[315px] left-[20px] shadow-top-slight font-bold text-[#485256] xl:w-[165px] xl:h-[165px] xl:text-[30px] xl:bg-[#fff] xl:transition-transform xl:duration-500 xl:hover:scale-110 `}
          >
            API
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;

{
  /* <div className="relative">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-[32px] text-[#17262b] leading-10 font-['CerebriSans'] text-center">
          connect your store
        </h1>
        <text className="text-center font-normal text-base text-[#485256] font-['Roboto'] ">
          Printify easily integrates with major e-commerce platforms and market
          places
        </text>
      </div>
      <div className=" w-[330px] h-[230px]">
        <div className="w-[55px] h-[55px] flex justify-center items-center rounded-md absolute top-[105px] left-[100px] shadow-top-slight">
          <img src={patners[0]} className="w-[26px] h-[26px]" />
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center  absolute top-[115px] left-[170px] rounded-lg shadow-top-slight ">
          <img src={patners[1]} className="w-[48px] h-[48px]" />
        </div>
        <div className=" w-[60px] h-[60px] flex justify-center items-center rounded-md absolute shadow-top-slight top-[95px] left-[230px] ">
          <img src={patners[2]} className="w-[36px] h-[16px]" />
        </div>
        <div className="bg-[#18C75A] shadow-top-slight w-[66px] h-[66px] flex justify-center items-center rounded-md absolute top-[175px] left-[140px] ">
          <img src={patners[7]} className="w-[18px] h-[26px]" />
        </div>
        <div className="w-[66px] h-[66px] flex justify-center items-center rounded-xl absolute top-[250px] left-[70px] shadow-top-slight">
          <img src={patners[8]} className="w-[36px] h-[36px]" />
        </div>
        <div className="w-[55px] h-[55px] flex justify-center items-center rounded-md absolute top-[315px] left-[20px] shadow-top-slight font-bold text-[#485256]">
          API
        </div>
        <div className="w-[26px] h-[26px] flex justify-center items-center rounded-full absolute top-[243px] left-[140px] shadow-top-slight">
          <img src={patners[9]} className="w-[26px] h-[26px] rounded-full" />
        </div>

        <div className="w-[65px] h-[70px] flex justify-center items-center  absolute top-[270px] left-[170px] rounded-lg shadow-top-slight ">
          <img src={patners[4]} className="w-[36px] h-[36px]" />
        </div>
        <div className=" w-[80px] h-[80px] flex justify-center items-center rounded-md absolute shadow-top-slight top-[192px] left-[248px] ">
          <img src={patners[6]} className="w-[36px] h-[16px]" />
        </div>
        <div className=" w-[50px] h-[50px] flex justify-center items-center rounded-md absolute shadow-top-slight top-[285px] left-[297px] ">
          <img src={patners[3]} className="w-[36px] h-[16px]" />
        </div>
      </div>
    </div> */
}
