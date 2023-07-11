import { useFetch } from "@/api/hooks/useFetch";
import { LeaguesCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { Pagination } from "@/components/pagination";
import { AppContext } from "@/context/BaseBox";
import { CountryTypes, LeaguesTypes } from "@/utils";
import React, { useContext, useEffect, useState } from "react";
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
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<CountryData>("v1/countries/all", {
      page: page,
    });

  const [counties, setCounties] = useState<CountryTypes[]>([]);

  useEffect(() => {
    if (data) {
      setCounties((prevItems) => [...prevItems, ...data.data]);
    }
  }, [data]);

  console.log(counties);

  return (
    <div>
      <div className="card">
        {selectedCountry != 0 && (
          <button
            onClick={() => setSelectedCountry(0)}
            style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
          >
            Return
          </button>
        )}
        {selectedCountry > 0 ? (
          <div>
            <League countryId={selectedCountry} />
          </div>
        ) : (
          <div>
            <ul className="leagues-ul2">
              {counties.map((item, i) => {
                return (
                  <LeaguesCard
                    onClick={() => setSelectedCountry(item.id)}
                    img={item.image}
                    key={i}
                    id={item.id}
                    name={item.name}
                  />
                );
              })}
            </ul>
            {isLoading && <Loading style={{ width: "40px" }} />}
            <Pagination
              hasMore={data?.has_more!}
              hasPagination={data?.pagination!}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
