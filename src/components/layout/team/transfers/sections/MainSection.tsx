import { useFetch } from "@/api/hooks/useFetch";
import { TransfersCard } from "@/components/cards";
import { TeamBox } from "@/components/layout/base-box";
import { Loading } from "@/components/loading";
import { AppContext } from "@/context/BaseBox";
import { TransfersType } from "@/utils";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState, useRef } from "react";

interface DataType {
  success: boolean;
  data: TransfersType[];
  message: string;
  pagination: boolean;
  per_page: number;
  current_page: number;
  has_more: boolean;
}

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const { query } = useRouter();
  const [page, setPage] = useState<number>(1);

  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<DataType>(query.id ? `v1/teams/transfers/${query.id}` : "", {
      page: page,
    });
  const [transfers, setTransfers] = useState<TransfersType[]>([]);
  const observe = useRef<IntersectionObserver>();
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    if (data) {
      setTransfers(data?.data);
    }
  }, [data]);

  const firstResultRef = (node: HTMLDivElement) => {
    if (isLoading) return;
    if (observe.current) observe.current.disconnect();
    observe.current = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        !loadMore &&
        data?.has_more! &&
        data?.pagination!
      ) {
        setLoadMore(true);
        setPage((prev) => (prev += 1));
      }
    });
    if (node) observe.current.observe(node);
  };

  return (
    <div>
      <div>
        {transfers.map((item, i) => {
          return (
            <>
              <TransfersCard key={i} transfers={item} />
              {i === transfers.length - 1 && <span ref={firstResultRef}></span>}
            </>
          );
        })}
      </div>
      {isLoading && <Loading style={{ width: "50px" }} />}
    </div>
  );
};

export default MainSection;
