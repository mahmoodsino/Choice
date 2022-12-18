import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { GradientElement } from '../elements';
import { getBrands, homeBrandType } from '../../../../helper';
import { toast } from 'react-toastify';


const BrandsCarosal = () => {
  const [brands,setBrands]=useState<homeBrandType[]>([])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        rows: 1,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
        variableWidth: true,
      };

      useEffect(() => {
        const getData = async () => {
          const res = await getBrands()
          if(res===null){
            toast.error("some thing went wrong")
          }else{
            setBrands(res.result.brands)
          }
        }
        getData()
      },[])
  return (
    <div>

      <Slider {...settings}>
        {brands.map((brand,i) => {
          return(
            <GradientElement key={i} image={brand.img} id={brand.id}  />
          )
        })}
      </Slider>
      
    </div>
  )
}

export default BrandsCarosal
