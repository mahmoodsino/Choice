import React from "react";
import DetailsCard from "./DetailsCard";
import DetailsProductPhoto from "./DetailsProductPhoto";
import RelatedProducts from "./RelatedProducts";

const MainSection = () => {
  return (
    <div className="lg:px-[75px] md:px-[35px] sm:px-[20px] 2xl:container m-auto pb-40">
      <div className="lg:flex">
        <div className="lg:w-1/2 mt-10">
          <DetailsProductPhoto />
        </div>
        <div className="lg:w-1/2 sm:mt-40 lg:mt-10  px-5">
          <DetailsCard />
        </div>
      </div>
      <div className="mt-36 bg-[#FBFBFB] py-5 px-5">
        <span className="font-bold text-lg">Product Infomation</span>
        <div className="h-0 w-[70%] border mt-2">
          <div className="ml-10 h-0 border border-black w-[15%]"></div>
        </div>
        <span className="text-sm  block mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id
          feugiat faucibus aliquet cursus. Aliquet ullamcorper auctor amet
          convallis quis amet mattis risus sem. Sapien vulputate viverra sed
          praesent pellentesque. Cursus amet molestie magna scelerisque nisi.
          Ullamcorper id urna, eleifend varius quisque diam quam lorem purus.
          Molestie fermentum vitae, justo, risus. Lorem ipsum dolor sit amet,
          consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Malesuada id feugiat faucibus aliquet cursus. Aliquet
          ullamcorper auctor amet convallis quis amet mattis risus sem. Sapien
          vulputate viverra sed praesent pellentesque. Cursus amet molestie
          magna scelerisque nisi. Ullamcorper id urna, eleifend varius quisque
          diam quam lorem purus. Molestie fermentum vitae, justo, risus.
        </span>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default MainSection;
