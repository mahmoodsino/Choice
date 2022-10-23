import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { getSpecialProducts, ProductsType } from "../../../../helper";
import { BaseCard } from "../../../card";
import { Spinner } from "../../../spinner";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`text-black absolute right-0  -top-[52px]     h-8 w-8 border   text-center cursor-pointer  z-20 `}
      onClick={onClick}
    >
      <svg
      className="absolute w-5 top-1 left-1"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.125 8.99998C1.125 8.85079 1.18426 8.70772 1.28975 8.60223C1.39524 8.49674 1.53832 8.43748 1.6875 8.43748H14.9546L11.4143 4.89823C11.3086 4.79261 11.2493 4.64935 11.2493 4.49998C11.2493 4.35061 11.3086 4.20735 11.4143 4.10173C11.5199 3.99611 11.6631 3.93677 11.8125 3.93677C11.9619 3.93677 12.1051 3.99611 12.2108 4.10173L16.7108 8.60173C16.7631 8.65398 16.8047 8.71605 16.8331 8.78439C16.8614 8.85273 16.876 8.92599 16.876 8.99998C16.876 9.07397 16.8614 9.14723 16.8331 9.21557C16.8047 9.2839 16.7631 9.34598 16.7108 9.39823L12.2108 13.8982C12.1051 14.0038 11.9619 14.0632 11.8125 14.0632C11.6631 14.0632 11.5199 14.0038 11.4143 13.8982C11.3086 13.7926 11.2493 13.6494 11.2493 13.5C11.2493 13.3506 11.3086 13.2073 11.4143 13.1017L14.9546 9.56248H1.6875C1.53832 9.56248 1.39524 9.50321 1.28975 9.39773C1.18426 9.29224 1.125 9.14916 1.125 8.99998Z"
          fill="black"
        />
      </svg>

     
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`text-black absolute -top-[52px] right-10  border    h-8 w-8   text-center  cursor-pointer   z-20    `}
      onClick={onClick}
    >
      <svg
        className="absolute w-5 top-1 left-1"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.875 8.99998C16.875 8.85079 16.8157 8.70772 16.7102 8.60223C16.6048 8.49674 16.4617 8.43748 16.3125 8.43748H3.04537L6.58575 4.89823C6.69137 4.79261 6.75071 4.64935 6.75071 4.49998C6.75071 4.35061 6.69137 4.20735 6.58575 4.10173C6.48013 3.99611 6.33687 3.93677 6.1875 3.93677C6.03813 3.93677 5.89487 3.99611 5.78925 4.10173L1.28925 8.60173C1.23686 8.65398 1.1953 8.71605 1.16695 8.78439C1.13859 8.85273 1.12399 8.92599 1.12399 8.99998C1.12399 9.07397 1.13859 9.14723 1.16695 9.21557C1.1953 9.2839 1.23686 9.34598 1.28925 9.39823L5.78925 13.8982C5.89487 14.0039 6.03813 14.0632 6.1875 14.0632C6.33687 14.0632 6.48013 14.0039 6.58575 13.8982C6.69137 13.7926 6.75071 13.6494 6.75071 13.5C6.75071 13.3506 6.69137 13.2074 6.58575 13.1017L3.04537 9.56248H16.3125C16.4617 9.56248 16.6048 9.50322 16.7102 9.39773C16.8157 9.29224 16.875 9.14916 16.875 8.99998V8.99998Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

const SpecialProducts = () => {
  const [spcialProducts, setSpecialProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    // slidesToShow: 4,
    rows: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
  };


  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getSpecialProducts();
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        setSpecialProducts(res.result.items);
      }
      setLoading(false);
    };
    getData();
  }, []);


  return (
    <div className="mt-10">
      <div className="mb-5">
        <span className="px-5 py-1.5 text-sm font-bold bg-yellow-950">
        SPECIALS
        </span>
        <div className="w-full mt-0.5 border border-b"></div>
      </div>
      {!loading ? (
        <div className="">
          <Slider {...settings}>
            {spcialProducts.map((item) => {
              return (
                <div key={item.id} className="ml-3">
                  <BaseCard
                    width="230px"
                    smallWidth="200px"
                    description={item.short_description}
                    id={item.id}
                    name={item.name}
                    img={item.images}
                    price={item.variation.price}
                    variationId={item.variation.id}
                    available_quantity={item.variation.available_quantity}
                    inStock={item.variation.in_stock}
                    tracking_type={item.tracking_type}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div className="flex justify-center">
          <Spinner className="w-40" />
        </div>
      )}
    </div>
  );
};

export default SpecialProducts;
