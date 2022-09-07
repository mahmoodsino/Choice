import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import {RecoilRoot, useRecoilState} from "recoil"
import { FixedNavbar, Fotter, Header, MobaiHeader, MobileSidbar, Navbar } from "../components";
import { ActiveDropDownAtom, showCategoriesAtom } from "../helper";


interface Props {
  children: ReactNode;
}



const App = ({ children }: Props) => {
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);
    const [showCategories,setShowCategories]=useRecoilState(showCategoriesAtom)

  
  return (
    <div
    onClick={() => (activeDropDown || showCategories ?( setActiveDropDown(false),setShowCategories(false)) : null)}
      className="font-Poppins min-h-[60vh]"
    >
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
        <App>
          <Header />
          <FixedNavbar />
          <MobaiHeader/>
          <Navbar/>
          <MobileSidbar />
            <Component {...pageProps} />
            <Fotter/>
        </App>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
