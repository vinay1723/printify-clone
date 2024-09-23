import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./details.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const details = [
  {
    img: "https://printify.com/pfh/assets/legacy/custom-products.png",
    action: " Create",
    title: "CUStomer products",
    description:
      " Easily add your designs to a wide range of products using our tools",
  },
  {
    img: "https://printify.com/pfh/assets/legacy/your-products.png",
    action: " sell",
    title: "on your terms",
    description: "you choose the products,sale price, and where to sell",
  },
  {
    img: "https://printify.com/pfh/assets/legacy/fullfillment.png",
    action: "we handle",
    title: "fullfillement",
    description:
      "Once an order is placed, we automatically handle all the printing and delivery logistics",
  },
];

const Details = () => {
  return (
    <div className="details-container h-[450px] bg-[#F7F7F7] mb-[50px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper flex flex-row justify-center xl:hidden"
      >
        {details.map((detail, i) => (
          <SwiperSlide
            key={i}
            className="w-[310px] mb-[50px] flex flex-col gap-4 justify-center items-center text-center px-10"
          >
            <img src={detail.img} className="w-[140px] h-[140px] mb-[15px]" />
            <h4 className="font-bold text-lg font-['Cerebri Sans'] leading-[24px] text-[#29ab51] uppercase">
              {detail.action}
            </h4>
            <h2 className="font-bold text-2xl font-['Cerebri Sans'] leading-[24px] text-[#17262b] uppercase">
              {detail.title}
            </h2>
            <p className="font-normal text-sm text-[#485256] leading-[20px] font-['Roboto'] text-center">
              {detail.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="pagination-navigation-container">
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
      </div> */}
      <div className=" flex flex-row justify-center invisible xl:visible xl:gap-[65px]  xl:px-[100px]">
        {details.map((detail, i) => (
          <div
            key={i}
            className="xl:w-[322px] xl:flex xl:items-start xl:flex-col xl:mt-[140px]"
          >
            <img src={detail.img} className="w-[140px] h-[140px] mb-[15px]" />
            <h4 className="font-bold text-lg font-['Cerebri Sans'] leading-[24px] text-[#29ab51] uppercase">
              {detail.action}
            </h4>
            <h2 className="font-bold text-2xl font-['Cerebri Sans'] leading-[32px] text-[#17262b] uppercase">
              {detail.title}
            </h2>
            <p className="font-normal text-sm text-[#485256] leading-[20px] font-['Roboto'] text-center xl:text-left xl:mt-[18px]">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
