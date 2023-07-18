import { usePost } from "@/api/hooks/usePost";
import { useAuth } from "@/context/auth/AuthContext";
import { LeaguesDataTypes } from "@/utils";
import Link from "next/link";
import { FC } from "react";
import { toast } from "react-toastify";
import { CustomBtn } from "../buttons";
import { Loading } from "../loading";

interface Props {
  league: LeaguesDataTypes;
}

const BoxTitle: FC<Props> = ({ league }) => {
  const { isAuth } = useAuth();
  const {
    isLoading: AddToFavoriteLoading,
    isError: AddToFavoriteISError,
    error: AddToFavoriteError,
    data: AddToFavoriteData,
    mutate,
  } = usePost<any, any>("favorite/store");

  const handleAddToFavorite = (id: number, name: string, image: string) => {
    let formdata = new FormData();
    formdata.append("entity_id", id.toString());
    formdata.append("type", "league");
    formdata.append("entity_name", name);
    formdata.append("entity_image", image);
    mutate(formdata, {
      onSuccess: (data) => {
        if (data.data.data.favorite) {
          console.log("true add");
          toast.success("Added successfully");
        } else {
          console.log("true remove");
          toast.success("Removed successfully");
        }
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    });
  };

  return (
    <div className="box-title-1">
      <Link href={`/league/${league.id}/news`} className="left">
        <img src={league?.image} />
        <div>
          <h3>{league?.name}</h3>
          <span>{league?.country?.name}</span>
        </div>
      </Link>
      {isAuth() && (
        <div className="right">
          {!AddToFavoriteLoading ? (
            <CustomBtn
              onClick={() =>
                handleAddToFavorite(league?.id, league?.name, league?.image)
              }
              isFav
              isNotif={false}
            />
          ) : (
            <Loading style={{ width: "40px" }} />
          )}
          <CustomBtn isNotif isFav={false} />
        </div>
      )}
    </div>
  );
};

export default BoxTitle;
