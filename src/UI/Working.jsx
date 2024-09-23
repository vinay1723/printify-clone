function Working() {
  return (
    <section className="flex xl:items-start xl:w-[1280px] ">
      <div className="bg-[#203741] w-[348px] text-[#FFFFFF] flex flex-col items-center gap-8 px-5 rounded-xl xl:h-[660px] xl:w-[607px] xl:px-[105px] xl:py-[60px] xl:items-start xl:ml-[190px] xl:justify-start xl:mt-[60px]">
        <div className="gap-5">
          <h1 className="font-bold text-[32px] leading-[40px] font-['CerebriSans'] tracking-tighter mb-5 xl:text-[40px] xl:leading-[56px] xl:tracking-[-1px]">
            Make Money, Risk-Free
          </h1>
          <text className="font-normal text-base font-['Roboto']">
            You pay for fulfillment only when you make a sale
          </text>
        </div>

        <div className="bg-[#17262B] w-[300px] h-[200px] font-medium text-base font-['Roboto'] p-5 flex flex-col  gap-6 rounded-xl">
          <text className="flex justify-between">
            You sell a t-shirt <span>$30</span>
          </text>
          <text className="flex justify-between">
            You pay for its production <span>$12</span>
          </text>
          <div className="bg-[#455154] h-[1px]"></div>
          <text className="font-bold tracking-[-0.2px] text-xl text-[#18c75a] flex justify-between xl:leading-[32px] xl:tracking-[-0.2px  ]">
            Your profit <span>$18</span>
          </text>
        </div>
        <button className="font-medium text-base font-['Roboto] bg-[#39B75D] w-[300px] h-[35px] rounded-sm xl:w-[120px]  xl:p-[15px]  xl:flex xl:justify-center xl:items-center">
          Start selling
        </button>
        <text className="font-normal text-sm font-['Roboto'] mb-[50px] xl:text-base xl:font-medium ">
          100% Free to use · 900+ Products · Largest print network
        </text>
      </div>
      <div className="invisible  xl:visible xl:w-[402px] xl:h-[458px] xl:mt-[200px] xl:ml-[-100px]">
        <img src="/img/plant.png" className="xl:rounded-2xl" />
      </div>
    </section>
  );
}

export default Working;
