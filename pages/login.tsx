import React from 'react'
import { LoginMainSection } from '../components'
import withAuth from '../helper/with-auth'

const login = () => {
  return (
    <div>
      <LoginMainSection />
    </div>
  )
}

export default withAuth(login)
