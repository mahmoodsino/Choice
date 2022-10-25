import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import {
  ContinueAsGuest,
  FixedNavbar,
  Fotter,
  Header,
  MessageModal,
  MobaiHeader,
  MobailCategoryModal,
  MobileSidbar,
  Navbar,
} from "../components";
import {
  ActiveDropDownAtom,
  AllCartsInfoAtom,
  CartItemsAtom,
  CountriesAtom,
  countryType,
  ErorrMessageAtom,
  getCartItems,
  getHomeInfo,
  getPromotions,
  HomePageAtom,
  PromotionsAtom,
  showCategoriesAtom,
  TokenAtom,
} from "../helper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCountries } from "../helper/sever/address-info";

interface Props {
  children: ReactNode;
}

let modifCountries: countryType[] = [];

const App = ({ children }: Props) => {
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);
  const [showCategories, setShowCategories] =
    useRecoilState(showCategoriesAtom);
  const [allCartsInfo, setAllCartsInfo] = useRecoilState(AllCartsInfoAtom);
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [errorMessage, setErorrMessage] = useRecoilState(ErorrMessageAtom);
  const [homePageState, setHomePageState] = useRecoilState(HomePageAtom);
  const [promotions, setPromotions] = useRecoilState(PromotionsAtom);
  const [contries, setCountries] = useRecoilState(CountriesAtom);

  if (typeof window !== "undefined") {
    setToken(localStorage.getItem("token") || "");
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getCartItems(token);
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        setAllCartsInfo(res.result);
        setCartItems(res.result.items);
      }
    };
    if (token.length > 1) {
      getData();
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await getHomeInfo();
      if (res == null) {
        toast.error("some thing went wrong");
      } else setHomePageState(res.result);
    };
    getData();
  }, []);

  useEffect(() => {
    const getDate = async () => {
      const res = await getPromotions();
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        setPromotions(res.result);
      }
    };
    getDate();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const res = await getCountries();
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        let modifiedResponse = res.result;
        modifiedResponse.map((item: { id: number; name: string }) => {
          let countreyValue = item.id.toString();

          let countreyLabel = item.name;
          let newCountriesStructur = {
            label: countreyLabel,
            value: countreyValue,
          };
          if (modifCountries.length < 250) {
            modifCountries.push(newCountriesStructur);
          }
        });
        setCountries(modifCountries);
      }
    };
    getdata();
  }, []);

  return (
    <div
      onClick={() =>
        activeDropDown || showCategories
          ? (setActiveDropDown(false), setShowCategories(false))
          : null
      }
      className="font-Poppins min-h-[60vh]"
    >
      <ContinueAsGuest />
      <MobailCategoryModal />
      <MessageModal message={errorMessage} />
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
          <MobaiHeader />
          <Navbar />
          <MobileSidbar />
          <Component {...pageProps} />
        </App>
        <ToastContainer />

        <Fotter />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
