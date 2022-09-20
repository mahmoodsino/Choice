import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { HomeMainSectoion} from '../components'
import { TokenAtom } from '../helper'

const Home: NextPage = () => {
  const [token,setToken]=useRecoilState(TokenAtom)

  return (
    <div>
      <HomeMainSectoion />
     
    </div>
  )
}

export default Home
