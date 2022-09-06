import Image, { StaticImageData } from 'next/image';
import React, { JSXElementConstructor, ReactElement } from 'react'

type props = {
    image: StaticImageData
  };

const GradientElement = ({image}:props) => {
  return (
    <div>
        <div className='pr-4'>
                <div style={{
                    background:
                    "linear-gradient(90deg, rgba(255,199,0,1) 6%, rgba(196,196,192,1) 55%)",
                }} className='rounded-full flex items-center w-40 h-40 '>
                    
                    <div className='w-32 h-32  bg-white rounded-full m-auto  flex items-center '>
                        <Image src={image} alt="" />
                    </div>
                </div>

        </div>
    </div>
  )
}

export default GradientElement
