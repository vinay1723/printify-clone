import Button from "../components/Button";

import Check from "../assets/check";
import Women from "../components/Women";

//mt-[150px]
function Hero() {
  return (
    <section className="flex flex-col  items-center gap-4  px-[45px] justify-center bg-[url('https://printify.com/pfh/media/background-IAMAETLT.svg')] bg-cover  xl:flex xl:flex-row xl:items-center xl:gap-5 xl:px-14 xl:justify-between xl:w-[1280px] ">
      <div>
        <h1 className="w-[250px] text-[32px] mt-[50px] font-[700] text-[#17262b] leading-10 font-['CerebriSans'] tracking-tight xl:text-[56px] xl:leading-[72px] xl:w-[468px] xl:mt-[0px]">
          Create and sell custome products
        </h1>
        <ul className="w-[250px] xl:mt-[24px]">
          <li className="flex gap-2 items-center">
            <Check />
            <span>100% Free to use</span>
          </li>
          <li className="flex gap-2 items-center">
            <Check />
            <span>900+ High-Quality Products</span>
          </li>
          <li className="flex gap-2 items-center">
            <Check />
            <span>Largest global print network</span>
          </li>
        </ul>
        <div className="mt-[10px]  flex flex-col gap-[15px] xl:flex xl:flex-row xl:gap-5 xl:mt-[44px] xl:mb-[15px]">
          <button className=" flex gap-1 w-[250px] h-[48px] items-center justify-center   font-['Roboto'] text-base font-medium  border-[1px] border-[#E1E1E1] bg-[#39B75D]  text-[#E1E1E1] xl:w-[175px] xl:h-[50px]">
            Start for free
          </button>
          <button className=" flex gap-1 w-[250px] h-[48px] items-center justify-center   font-['Roboto'] text-base font-medium  border-[1px] border-[#E1E1E1]  text-[#353a47] xl:w-[175px] xl:h-[50px]">
            <img
              src="https://printify.com/pfh/media/play-JMSHNOGL.svg"
              className="w-[18px] h-[18px]"
            />
            How it works?
          </button>
        </div>
        <text className="text-[#39b65e] font-['Roboto'] text-base font-medium mt-[5px]">
          Trusted by over 8M sellers around the world
        </text>
      </div>
      <Women />
    </section>
  );
}

export default Hero;
