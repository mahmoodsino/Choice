import {
  AccountIcon,
  BasketIcon,
  LetterIcon,
  PhoneIcon,
  WriteIcon,
} from "../icons";
import LoginIcon from "../icons/LoginIcon";
import choicePhoto from "../../public/assets/images/choicePhoto.png";
import Image from "next/image";
import Link from "next/link";
import { BaseButton } from "../buttons";
import { useRecoilState } from "recoil";
import {
  ActiveDropDownAtom,
  AllCartsInfoAtom,
  CouninueAsGuestModalAtom,
  TokenAtom,
} from "../../helper";
import { Dropdown } from "../dropdown";
import { useRouter } from "next/router";

const Header = () => {
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);

  const [allCartsInfo, setAllCartsInfo] = useRecoilState(AllCartsInfoAtom);
  const [ContinueAsGuestModal, setContinueAsGuestModal] = useRecoilState(
    CouninueAsGuestModalAtom
  );
  const [token,setToken]=useRecoilState(TokenAtom)

  const{push}=useRouter()

  let userType;

  if (typeof window !== "undefined") {
    userType = localStorage.getItem("type" || "");
  }

  const handelGoToCart = () => {
    push("/cart");
  };

  return (
    <div className="2xl:container m-auto md:block sm:hidden ">
      <div className="flex justify-between border-b lg:px-[75px] md:px-[35px] ">
        <div className="flex ">
          <div className="flex space-x-2 items-center border-r py-2 pr-2">
            <PhoneIcon className="w-2.5 fill-gray-950" />
            <span className="text-sm text-gray-950 ">111-111-111</span>
          </div>
          <div className="flex  items-center space-x-2">
            <LetterIcon className="fill-gray-950 w-8 py-2 pl-2" />
            <span className="text-sm text-gray-950">choice@gmail.com</span>
          </div>
        </div>
        <div className="flex relative">
          {userType === "user" || userType ==="guest" ? (
            <div className="flex">
            <BaseButton
              onClick={() => setActiveDropDown(!activeDropDown)}
              className=" flex space-x-2 items-center border-l py-2 px-6"
            >
              <AccountIcon className="w-5 fill-gray-950" />
              <span className="text-sm text-gray-950 ">My Account</span>
            </BaseButton>
            <Link href="/login">
              <a className="flex  items-center space-x-2 border-l">
                <LoginIcon className="fill-gray-950 w-8 py-2 pl-2" />
                <span className="text-sm text-gray-950">Login</span>
              </a>
            </Link>

            </div>

            
          ) : (
            <Link href="/login">
              <a className="flex  items-center space-x-2 border-l">
                <LoginIcon className="fill-gray-950 w-8 py-2 pl-2" />
                <span className="text-sm text-gray-950">Login</span>
              </a>
            </Link>
          )}
          {activeDropDown ? (
            <div className="bg-white absolute  z-10  top-[100%]  shadow-[0_0_5px_rgba(0,0,0,0.12)]">
              <Dropdown />
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between lg:px-[65px] md:px-[25px] border-b">
        <Image alt="" src={choicePhoto} />
        <div className="flex items-center space-x-2 pr-3">
          <Link href="/requestaqoute">
            <a className="flex items-center border-r px-4 space-x-2">
              <WriteIcon className="fill-gray-1000 w-7" />
              <span className="font-bold text-gray-1000">REQUEST A QUOTE!</span>
            </a>
          </Link>

            <BaseButton onClick={() =>
                  token.length > 1
                    ? handelGoToCart()
                    : setContinueAsGuestModal(true)
                } className="flex space-x-2 pl-3">
              <BasketIcon className="w-7 fill-blue-950 inline-block" />
              <div>
                <span className="block text-sm text-blue-950 font-bold">
                  Shopping Cart
                </span>
                <span className="block text-xs text-gray-1050">
                  {allCartsInfo?.items?.length} item(s)- $
                  {allCartsInfo?.total_price}
                </span>
              </div>
            </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
