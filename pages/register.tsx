import React from 'react'
import { RegisterMainSection } from '../components'
import withAuth from '../helper/with-auth'

const register = () => {
  return (
    <div>
      <RegisterMainSection />
    </div>
  )
}

export default withAuth(register)
