import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { LeaguesCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { AppContext } from "@/context/BaseBox";
import { CountryTypes } from "@/utils";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import League from "./League";

type CountryData = {
  current_page: number;
  data: CountryTypes[];
  has_more: boolean;
  message: string;
  pagination: boolean;
  per_page: number;
  success: boolean;
};

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(false);
    setIsRightShow(true);
  }, []);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [page, setPage] = useState<number>(1);
  const { query, replace, pathname } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<CountryData>("v1/countries/all", {
      page: page,
    });

  const [counties, setCounties] = useState<CountryTypes[]>([]);
  const observe = useRef<IntersectionObserver>();
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    setLoadMore(true);
    if (data) {
      setCounties((prevItems) => [...prevItems, ...data.data]);
    }
    setLoadMore(false);
  }, [data]);

  useEffect(() => {
    if (query.CountryId) {
      setSelectedCountry(+query.CountryId);
    }
  }, [query.CountryId]);

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
      <div className="card">
        {selectedCountry > 0 ? (
          <div>
            <League
              setSelectedCountry={setSelectedCountry}
              countryId={selectedCountry}
            />
          </div>
        ) : (
          <div>
            <ul className="leagues-ul2">
              {counties.map((item, i) => {
                return (
                  <>
                    <LeaguesCard
                      href={`/leagues?CountryId=${item.id}`}
                      img={item.image}
                      key={i}
                      id={item.id}
                      name={item.name}
                    />
                    {i === counties.length - 1 && (
                      <span ref={firstResultRef}></span>
                    )}
                  </>
                );
              })}
            </ul>
            {isLoading && <Loading style={{ width: "40px" }} />}
          </div>
        )}
        {isError && <ReloadButton refetch={refetch} />}
      </div>
    </div>
  );
};

export default MainSection;
