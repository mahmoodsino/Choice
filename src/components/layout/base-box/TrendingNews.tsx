import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { NewsMainCard, NewsSecondaryCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { NoData } from "@/components/no-data";
import { NewsType } from "@/utils";
import { FC, useState, useEffect } from "react";

interface ApiResponse {
  success: boolean;
  data: NewsType[];
  message: string;
  pagination: boolean;
}

const TrendingNews: FC = () => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<ApiResponse>(`v1/blogs/all`, { limit: 5 });
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
      const firstArray = news.slice(0, 1);
      const secondArray = news.slice(1);
      setFirstArray(firstArray);
      setSecondArray(secondArray);
    }
  }, [news]);

  return (
    <div className="home-right">
      {!isLoading ? (
        <div className="card">
          <h3 className="text-title"> Trending News 🔥</h3>
          {firstArray.map((item, i) => {
            return <NewsMainCard key={i} news={item} />;
          })}

          {secondArray.map((item, i) => {
            return <NewsSecondaryCard key={i} news={item} />;
          })}
          {isError && <ReloadButton refetch={refetch} />}
          {!isLoading && news?.length == 0 && <NoData />}
        </div>
      ) : (
        <Loading style={{ width: "35px" }} />
      )}
    </div>
  );
};

export default TrendingNews;
