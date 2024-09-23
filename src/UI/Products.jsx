function Products() {
  return (
    <section className="flex flex-col gap-[35px] mt-[35px] justify-center items-center xl:flex-row xl:my-[100px] xl:gap-[20px] xl:w-[1280px] xl:ml-[100px] xl:items-center">
      <img
        className="w-[330px] h-[430px] object-contain "
        src="/img/img1.png"
      />
      <div className="pl-[18px] flex flex-col gap-[30px] ">
        <h1 className="font-bold text-[32px] text-[#17262b] leading-[39px] font-['Cerebri Sans'] tracking-tighter xl:w-[400px]">
          Easily add your design to a wide range of products
        </h1>
        <text className="font-normal text-base text-[#485256] leading-[23px] font-['Roboto'] xl:w-[400px]">
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </text>
        <a
          href="#"
          className="font-normal text-base text-[#39b75d]  font-['Roboto'] flex gap-1 items-center mb-[45px]"
        >
          All products
          <img
            src="https://printify.com/pfh/media/link-arrow-A6VZADMD.svg"
            className="w-[22px] h-[14px]"
          />
        </a>
      </div>
    </section>
  );
}

export default Products;
