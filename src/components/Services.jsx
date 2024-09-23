const services = [
  {
    img: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
    title: "Higher Profits",
    description:
      "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
  },
  {
    img: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
    title: "Robust Scaling",
    description:
      "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  },
  {
    img: "https://printify.com/pfh/assets/legacy/best-selection.svg",
    title: "Best Selection",
    description:
      "With 900+ products and top quality brands, you can choose the best products for your business.",
  },
];

function Services() {
  return (
    <section className="flex flex-col gap-7 mt-[60px] px-[17px] xl:grid xl:grid-cols-3 xl:gap-[38px] xl:pl-[107px] xl:mt-[130px] xl:w-[1280px]">
      {services.map((service, i) => (
        <Service key={i} service={service} />
      ))}
    </section>
  );
}

function Service({ service }) {
  return (
    <div className="flex flex-col gap-7 items-center justify-center text-center xl:w-[333px] xl:justify-start xl:items-start xl:text-left">
      <img src={service.img} className="w-[120px] h-[120px]" />
      <div className="flex flex-col gap-2">
        <h1 className="font-[700] text-[24px] font-[#17262B] leading-8 text-['CerebriSans']">
          {service.title}
        </h1>
        <text className="text-base font-normal text-[#485256] leading-[23px] font-['Roboto'] text-center xl:text-start">
          {service.description}
        </text>
      </div>
    </div>
  );
}
export default Services;
