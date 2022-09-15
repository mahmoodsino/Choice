import React from 'react'
import { MyAccountMainSection } from '../components'
import withAuth from '../helper/with-auth'

const myaccoutn = () => {
  return (
    <div>
      <MyAccountMainSection />
    </div>
  )
}

export default withAuth(myaccoutn)
