import React from 'react'
import { CartMainSection } from '../components'
import withAuth from '../helper/with-auth'

const cart = () => {
  return (
    <div>
      <CartMainSection />
    </div>
  )
}

export default withAuth(cart)
