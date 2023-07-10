import { useFetch } from "@/api/hooks/useFetch";
import { LeaguesCard } from "@/components/cards";
import { Loading } from "@/components/loading";
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
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<CountryData>("v1/countries/all");

  return (
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
        <League countryId={selectedCountry} />
      ) : !isLoading ? (
        <ul className="leagues-ul2">
          {data?.data.map((item, i) => {
            return (
              <LeaguesCard
                onClick={() => setSelectedCountry(item.id)}
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
              />
            );
          })}
        </ul>
      ) : (
        <Loading style={{ width: "40px" }} />
      )}
    </div>
  );
};

export default MainSection;
