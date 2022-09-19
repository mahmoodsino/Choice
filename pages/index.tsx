import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { HomeMainSectoion, Notification } from '../components'
import { TokenAtom } from '../helper'

const Home: NextPage = () => {
  const [token,setToken]=useRecoilState(TokenAtom)

  return (
    <div>
      <HomeMainSectoion />
      {token.length>1 &&
      <Notification />
      }
    </div>
  )
}

export default Home
