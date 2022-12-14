import { atom, useRecoilState } from "recoil";
import { CloseIcon } from "../../../icons";
import Fillters from "./Fillters";

export const showFillterProductAtom = atom({
  key: "showFillterProductAtom",
  default: false,
});

const FillterProductsMobile = () => {
  const [showFillterProducts, setShowFillterProducts] = useRecoilState(
    showFillterProductAtom
  );
  return (
    <div>
      <>
        <div
          className={`${
            showFillterProducts ? "bottom-0 " : "-bottom-full"
          } h-[70vh] shadow-[0_0_5px_rgba(0,0,0,0.12)] overflow-y-auto w-[100%] z-50 fixed bg-white  rounded-t-2xl transition-all duration-300 ease-in-out`}
        >
          <div className="fixed  p-3 bg-white z-50 h-10  w-full">
            <button onClick={() => setShowFillterProducts(false)}>
              <CloseIcon className="w-6 mt-2" />
            </button>
          </div>
          <div className="flex justify-center pt-7 py-5">
            <Fillters />
          </div>
        </div>
      </>
      {showFillterProducts ? (
          <div onClick={() =>setShowFillterProducts(false) } className="opacity-25 fixed inset-0 z-40 bg-black  "></div>
        ) : null}
    </div>
  );
};

export default FillterProductsMobile;
