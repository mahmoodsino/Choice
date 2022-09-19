import Image from "next/image";
import { useRecoilState } from "recoil";
import { OrderDetailsAtom } from "../../helper";
import no_image from "../../public/assets/images/no_image.jpg";

const CardReview = () => {
  const [orderDetails, setOrderDetails] = useRecoilState(OrderDetailsAtom);

  return (
    <div>
      {orderDetails.items?.map((item,i) => {
        return (
          <div key={i} className="flex flex-row border-b  pb-5 justify-between items-center sm:w-[100%] md:w-[90%] mb-5">
            <div className="">
              <div className="flex flex-row items-center ">
                <span className="md:text-sm sm:text-xs text-[#262626]">x{item.quantity}</span>
                <div className="border w-20 h-20 ml-2 product-slider-img">
                  {item.product?.image.id ? 
                <img className="w-20 h-20 product-slider-img" src={item.product.image.path} alt="" />  :
                <Image src={no_image} alt="" />
                }
                </div>
                <div className="flex flex-col md:text-sm w-64 space-y-2.5 sm:text-[13px] text-[#262626] ml-2">
                  <span className="font-semibold block ">{item.variation?.name}</span>
                  {/* <span>Size 1, CT 1, Power 1</span>
                  <span>Blue</span> */}
                </div>
              </div>
            </div>
            <div>
              <h1 className="md:text-xl font-medium text-gray-1500">$ {item.price}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardReview;
