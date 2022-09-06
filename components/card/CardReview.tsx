const CardReview = () => {
    return (
      <div className="flex flex-row border-b  pb-5 justify-between items-center sm:w-[100%] md:w-[90%] mb-5">
        <div className="">
          <div className="flex flex-row items-center ">
            <span className="md:text-sm sm:text-xs text-[#262626]">x2</span>
            <div className="border w-20 h-20 ml-2"></div>
            <div className="flex flex-col md:text-sm space-y-2.5 sm:text-[13px] text-[#262626 ml-2">
              <span className="font-semibold">Item Name 1</span>
              <span>Size 1, CT 1, Power 1</span>
              <span>Blue</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="md:text-xl font-medium text-gray-1500">$ 29.59</h1>
        </div>
      </div>
    );
  };
  
  export default CardReview;
  