import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Paginate = () => {
  const { pageNumber, profilesPerPage, profiles, setPageNumber } = useContext(
    GlobalContext
  );

  const totalProfiles = +profiles.length;
  const pageNumbers = [];
  const pages = Math.ceil(totalProfiles / profilesPerPage);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    pages > 1 && (
      <div className="pg-container mt-4">
        {pageNumbers.map((page) => (
          <button
            onClick={() => setPageNumber(page)}
            key={page}
            className={`pg-btn ${page === pageNumber ? "active-page" : null}`}
          >
            {page}
          </button>
        ))}
      </div>
    )
  );
};

export default Paginate;
