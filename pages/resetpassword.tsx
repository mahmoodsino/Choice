import React from 'react'
import { ResetPasswordMainSection } from '../components/layouts/resetpassword'
import withAuth from '../helper/with-auth'

const resetpassword = () => {
  return (
    <div>
      <ResetPasswordMainSection />
    </div>
  )
}

export default withAuth(resetpassword)
