import { useFetch } from "@/api/hooks/useFetch";
import { Loading } from "@/components/loading";
import { NewsSlugDetails } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface DataType {
  success: boolean;
  data: NewsSlugDetails;
  message: string;
  pagination: boolean;
}

const MainSection = () => {
  const { query } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<DataType>(query.slug ? `v1/blogs/${query.slug}/details` : "");
  const [details, setDetails] = useState<NewsSlugDetails>();

  useEffect(() => {
    if (data) {
      setDetails(data.data);
    }
  }, [data]);

  return (
    <div>
      <div className="card">
        {!isLoading ? (
          <div className="blog-details">
            {/* <span> 12 AUG 2022</span> */}
            <h1>{details?.title}</h1>
            <img src={details?.image} />
            {/* <a href="#" className="btn-4">
            Default Badge
          </a>
          <a className="btn-4" href="#">
            Success Badge
          </a>
          <a href="#" className="btn-4">
            Danger Badge
          </a>
          <a href="#" className="btn-4">
            Warning Badge
          </a>
          <a href="#" className="btn-4">
            info Badge
          </a> */}
            <div className="entity">
              {details?.entities?.map((item, i) => {
                return (
                  <a key={i} href="#" className="entity-box">
                    <img src={item.entity_image} />
                    <span>{item.entity_name}</span>
                  </a>
                );
              })}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1-QpAjJE1ws"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        ) : (
          <Loading style={{ width: "50px" }} />
        )}
      </div>
    </div>
  );
};

export default MainSection;
