import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { AboutusMainSection } from '../components'
import { categoriesType, HomePageAtom } from '../helper'


let selCategory : number[] =[]


const aboutus = () => {
  const [homePageState,setHomePageState]=useRecoilState(HomePageAtom)
  const [sel,setSel] = useState<categoriesType>({} as categoriesType)
  const [showCat,setShowCat] = useState< categoriesType[]>([]) 

  const {replace,query} = useRouter()

  // useEffect(() => {
  //   if(sel.id){
  //     setShowCat(sel.categories)
  //   }else{
  //     setShowCat(homePageState.all_categories)
  //   }
  // },[sel,homePageState])


  // useEffect(() => {
  //   selCategory = []
  //   if(typeof(query.category)!==undefined){
  //     //@ts-ignore
  //     const q= query?.category?.split("-")
  //     q?.map((item:string) => {
  //       let index:number=selCategory.findIndex(find => ( find===(+item)))  
  //       if(index<0&&+item!=0){
  //         selCategory=[...selCategory,+item]
  //       }      
  //     })
  //   }
      
  // },[query.category])

  // console.log(selCategory);
  

  // const  handekSomething = (item:categoriesType) => {
  //   selCategory = [...selCategory, item.id];
  //     setSel(item)
  //     let QueryCategory = selCategory.map(item => item).join("-")
  //     replace({query: { ...query, category: QueryCategory }},
  //       undefined,{scroll:false}
  //       );

  // }



  return (
    <div>
      {/* {  showCat?.map(item => {
        return(
          <span onClick={() => handekSomething(item)} className='block font-bold text-xursor-pointer
        '>
            {item.name}
          </span>
        )
      })} */}
      <AboutusMainSection />
    </div>
  )
}

export default aboutus
