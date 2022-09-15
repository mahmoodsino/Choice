import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import {RecoilRoot, useRecoilState} from "recoil"
import { ContinueAsGuest, FixedNavbar, Fotter, Header, MobaiHeader, MobailCategoryModal, MobileSidbar, Navbar } from "../components";
import { ActiveDropDownAtom, AllCartsInfoAtom, CartItemsAtom, getCartItems, showCategoriesAtom, TokenAtom } from "../helper";


interface Props {
  children: ReactNode;
}



const App = ({ children }: Props) => {
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);
    const [showCategories,setShowCategories]=useRecoilState(showCategoriesAtom)
    const [allCartsInfo,setAllCartsInfo]=useRecoilState(AllCartsInfoAtom)
    const [cartItems,setCartItems]=useRecoilState(CartItemsAtom)
    const [token, setToken] = useRecoilState(TokenAtom);
  
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token") || "");
    }
    const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;

    useEffect(() => {
      
      const getData = async () => {
        const res = await getCartItems(token);
        setAllCartsInfo(res.result)
      };
      if(token.length>1) {
        // clearTimeout(timerRef.current);
        // timerRef.current=setTimeout(() => {
          getData();
        // }, 1000);
      }
    }, [token]);
    
    useEffect(() => {
      const getData = async () => {
        const res = await getCartItems(token);
        setCartItems(res.result.items);
      };
      if(token.length>1) {
        // clearTimeout(timerRef.current);
          // timerRef.current=setTimeout(() => {
            getData();
          // }, 1000);
      }
    }, [token]);


  return (
    <div
    onClick={() => (activeDropDown || showCategories ?( setActiveDropDown(false),setShowCategories(false)) : null)}
      className="font-Poppins min-h-[60vh]"
    >
       <ContinueAsGuest />
       <MobailCategoryModal />
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
          <Header />
        <App>
          <FixedNavbar />
          <MobaiHeader/>
          <Navbar/>
          <MobileSidbar />
            <Component {...pageProps} />
        </App>
            <Fotter/>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
