import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { NewsMainCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { AppContext } from "@/context/BaseBox";
import { NewsType } from "@/utils";
import { FC, useContext, useEffect, useState } from "react";

interface ApiResponse {
  success: boolean;
  data: NewsType[];
  message: string;
  pagination: boolean;
}

const MainSection: FC = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<ApiResponse>(`v1/blogs/all`);
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    if (data) {
      setNews(data?.data);
    }
  }, [data]);

  return (
    <div className="home-middle">
      <div className="card">
        <div className="row">
          {news.map((item, i) => {
            return (
              <div key={i} className="col-md-6">
                <NewsMainCard news={item} />
              </div>
            );
          })}
        </div>
        {isLoading && <Loading style={{ width: "35px" }} />}
        {isError && <ReloadButton refetch={refetch} />}
      </div>
    </div>
  );
};

export default MainSection;
