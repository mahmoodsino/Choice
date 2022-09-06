import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import {RecoilRoot, useRecoilState} from "recoil"
import { Fotter, Header, Navbar } from "../components";
import { ActiveDropDownAtom, showCategoriesAtom } from "../helper";
import FixedNavbar from "../components/header/FixedNavbar";


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
          <Navbar/>
            <Component {...pageProps} />
            <Fotter/>
        </App>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
