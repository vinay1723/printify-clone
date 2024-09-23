import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./reviews.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const reviews = [
  {
    img: "https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png",
    name: "Robert A. Voltaire",
    store: "Store link",
    description:
      "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
  },
  {
    img: "https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png",
    name: "Quinten Barney",
    store: "Etsy Merchant",
    description:
      "Robert A. VoltaireStore linkPrintify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
  },
  {
    img: "https://printify.com/pfh/media/nikki-TJP4NANB.png",
    name: "Nikki",
    store: "Store link",
    description:
      "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
  },
  {
    img: "https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png",
    name: "Spencer, Brett, and Kyle",
    store: "Store link",
    description:
      "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.",
  },
  {
    img: "https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg",
    name: "April showers",
    store: "Store link",
    description:
      "I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.",
  },
];

function Reviews() {
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
    <section className="mt-[120px] bg-[#F7F7F7] relative xl:px-[53px] xl:w-[1280px]">
      <div className="p-5 flex flex-col gap-[35px] xl:gap-[65px] xl:flex-row xl:items-center  ">
        <h2 className="font-bold text-[32px] text-[#353a47] leading-10 font-[''CrebriSans] tracking-tighter xl:w-[390px] xl:text-[40px] xl:leading-[56px] xl:tracking-[-1px] xl:mt-[138px]">
          Trusted by over 8M sellers around the world
        </h2>
        <p className="xl:w-[386px] xl:h-[98px] xl:mt-[138px]">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </p>
      </div>
      <div className="details-container h-[450px] mt-[35px]  mb-[50px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={isTabletOrLaptop === true ? 2.5 : 1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper flex flex-col justify-center  px-3"
        >
          {reviews.map((review, i) => (
            <SwiperSlide
              key={i}
              className="w-[340px] h-[285px] mb-[70px] flex flex-col gap-4 justify-center items-start  px-5 bg-[#fff] rounded-tl-xl rounded-bl-xl xl:w-[450px] xl:p-[42px]"
            >
              <div className="flex gap-5 ">
                <img
                  src={review.img}
                  className="w-[60px] h-[60px] mb-[15px] rounded-xl xl:w-[65px] xl:h-[65px]"
                />
                <div className="flex flex-col items-start">
                  <h4 className="font-bold text-xl font-['Cerebri Sans'] leading-[32px] text-[#17262b] tracking-[-0.2px] xl:text-[24px]">
                    {review.name}
                  </h4>
                  <h2 className="font-normal text-base font-['Roboto']  text-[#29ab51] ">
                    {review.store}
                  </h2>
                  <ul className="flex gap-2 mt-1">
                    <li>
                      <img src="https://printify.com/pfh/media/star-S46SZESO.svg" />
                    </li>
                    <li>
                      <img src="https://printify.com/pfh/media/star-S46SZESO.svg" />
                    </li>
                    <li>
                      <img src="https://printify.com/pfh/media/star-S46SZESO.svg" />
                    </li>
                    <li>
                      <img src="https://printify.com/pfh/media/star-S46SZESO.svg" />
                    </li>
                    <li>
                      <img src="https://printify.com/pfh/media/star-S46SZESO.svg" />
                    </li>
                  </ul>
                </div>
              </div>
              <p className="font-normal text-base text-[#485256] leading-[24px] font-['Roboto'] text-start xl:w-[370px]">
                {review.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-[622px] left-[60px] w-[230px] h-[18px]">
        <img src="/img/down-arrow.png" />
      </div>
    </section>
  );
}

export default Reviews;
