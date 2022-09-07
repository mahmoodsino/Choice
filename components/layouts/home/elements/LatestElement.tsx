import React from 'react'
import BaseButton from '../../../buttons/BaseButton'

const LatestElement = () => {
  return (
    <div className="py-3 border-b mx-3">
        <div className="flex  space-x-3">
          <div className="border w-24 h-24"></div>
          <div className="text-gray-1200 whitespace-nowrap">
            <span className="block font-semibold">Product name / </span>
            <span className="block font-semibold">description</span>
            <span className="text-black font-bold block">$0.00</span>
            <BaseButton className="font-medium" title="Add to Cart" />
          </div>
        </div>
      </div>
  )
}

export default LatestElement
