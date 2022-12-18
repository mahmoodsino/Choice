import React from "react";
import { useRecoilValue } from "recoil";
import { QueryFiltersAtom, totalPagesAtom } from "../../helper";
import Pagination from "react-js-pagination";

interface Props {
  paginate: (num: number) => void;
}

const Paginations = ({ paginate }: Props) => {
  const totalPages = useRecoilValue(totalPagesAtom);
  const queryFilter = useRecoilValue(QueryFiltersAtom);

  return (
    <div className="bg-[#FAFAFB]   mt-10  ">
      <Pagination
        innerClass="flex sm:space-x-3 md:space-x-5 justify-center text-xl "
        itemClass="  cursor-pointer md:py-3 md:px-4 sm:py-1 sm:px-0.5 border hover:bg-blue-950 hover:text-yellow-950 sm:text-sm  duration-300 "
        activeClass="bg-blue-950 text-yellow-950"
        itemClassFirst="border  "
        itemClassPrev="border "
        activePage={queryFilter.page}
        itemsCountPerPage={25}
        totalItemsCount={25 * totalPages}
        pageRangeDisplayed={5}
        onChange={paginate.bind(this)}
      />
    </div>
  );
};

export default Paginations;
