import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainImage from "../../public/assets/images/mainImage.png"
import Link from "next/link";
import Image from "next/image";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      rows: 1,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: "button__bar",
    };

    return (
      <div className="lg:container mt-10 ">
        <Slider {...settings}>
          <div key={2}>
            <div
              className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover"
              style={{
                backgroundImage: `url(/assets/images/Rectangle.png)`,
              }}
            >
              <div className="2xl:left-[500px] pb-10 sm:mx-5 md:px-0  text-left ml mt-12">
                <span className="text-lg font-bold block">TiTAN Racheting ToolS</span>
                <span className="text-4xl text-yellow-1000 block font-semibold">TOOLS & EQUIPMENTS</span>
                <span className="text-blue-950 mt-2 font-bold block">STYLUS AND COMFORTABLE</span>
                <span className="mt-5 block text-gray-950 font-semibold">NEW CATALOGUE DESIGN</span>
                <div className="mt-10">
                    <Link href="/products" >
                      <a className="uppercase  text-lg font-bold  bg-blue-950 text-white px-3 py-2 rounded-full leading-5 tracking-[0.11em]">
                      shop now
                      </a>
                    </Link>
                </div>
              </div>
              <div className="sm:hidden md:block h-96">
                <Image width={200} height={384} className="" src={mainImage} alt="" />
              </div>
            </div>
          </div>

          <div key={1}>
            <div
              className="w-[100%] h-fit justify-around flex md:flex-row sm:items-center sm:flex-col  bg-cover"
              style={{
                backgroundImage: `url(/assets/images/Rectangle.png)`,
              }}
             
            >
              
              <div className="2xl:left-[500px] pb-10  text-left ml mt-12">
                <span className="text-lg font-bold block">TiTAN Racheting ToolS</span>
                <span className="text-4xl text-yellow-1000 block font-semibold">TOOLS & EQUIPMENTS</span>
                <span className="text-blue-950 mt-2 font-bold block">STYLUS AND COMFORTABLE</span>
                <span className="mt-5 block text-gray-950 font-semibold">NEW CATALOGUE DESIGN</span>
                <div className="mt-10">
                <Link href="/products" >
                      <a className="uppercase  text-lg font-bold  bg-blue-950 text-white px-3 py-2 rounded-full leading-5 tracking-[0.11em]">
                      shop now
                      </a>
                    </Link>
                </div>
              </div>
              <div className="sm:hidden md:block h-96 ">
                <Image width={200} height={384} className="" src={mainImage} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
