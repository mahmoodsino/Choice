import { useFetch } from "@/api/hooks/useFetch";
import { LeaguesCard } from "@/components/cards";
import { AppContext } from "@/context/BaseBox";
import { CountryTypes, LeaguesTypes } from "@/utils";
import React, { useContext, useEffect, useState } from "react";
import League from "./League";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(false);
    setIsRightShow(true);
  }, []);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<CountryTypes>("v1/countries/all");

  // console.log(data);

  return (
    <div className="card">
      {selectedCountry == 0 && (
        <button
          style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
        >
          Return
        </button>
      )}
      {selectedCountry > 0 ? (
        <League countryId={selectedCountry} />
      ) : (
        <ul className="leagues-ul2">
          {/* {data?.data.map((item, i) => {
            return (
              <LeaguesCard
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
              />
            );
          })} */}
        </ul>
      )}
    </div>
  );
};

export default MainSection;
