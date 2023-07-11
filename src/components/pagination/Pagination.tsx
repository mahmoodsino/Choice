import React, { FC } from "react";

interface Props {
  hasMore: boolean;
  hasPagination: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<Props> = ({ hasMore, hasPagination, page, setPage }) => {
  return (
    <div>
      {hasPagination && hasMore && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          className=""
        >
          <button
            style={{ cursor: "pointer", color: "white" }}
            onClick={() => setPage((prev) => (prev += 1))}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
