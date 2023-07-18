import { useFetch } from "@/api/hooks/useFetch";
import { NewsMainCard, NewsSecondaryCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { NewsType } from "@/utils";
import { FC, useEffect, useState } from "react";
import { ReloadButton } from "../buttons";
import { NoData } from "../no-data";

interface ApiResponse {
  success: boolean;
  data: NewsType[];
  message: string;
  pagination: boolean;
}

interface Props {
  entity_id: number;
}

const NewsEntity: FC<Props> = ({ entity_id }) => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<ApiResponse>(entity_id ? `v1/blogs/all` : "", {
      entity_id: entity_id,
    });
  const [news, setNews] = useState<NewsType[]>([]);
  const [firstArray, setFirstArray] = useState<NewsType[]>([]);
  const [secondArray, setSecondArray] = useState<NewsType[]>([]);

  useEffect(() => {
    if (data) {
      setNews(data?.data);
    }
  }, [data]);

  useEffect(() => {
    if (news) {
      const firstArray = news.slice(0, 2);
      const secondArray = news.slice(2);
      setFirstArray(firstArray);
      setSecondArray(secondArray);
    }
  }, [news]);

  return (
    <div>
      <div className="card">
        <div className="row">
          {firstArray.map((item, i) => {
            return (
              <div key={i} className="col-md-6">
                <NewsMainCard news={item} />
              </div>
            );
          })}
        </div>
        {secondArray.map((item, i) => {
          return (
            <div key={i} className="">
              <NewsSecondaryCard news={item} />
            </div>
          );
        })}
        {isLoading && <Loading style={{ width: "35px" }} />}
        {isError && <ReloadButton refetch={refetch} />}
        {!isLoading && news.length == 0 && <NoData />}
      </div>
    </div>
  );
};

export default NewsEntity;
