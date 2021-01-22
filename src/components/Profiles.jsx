import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Loader from "./Loader";
import Error from "./Error";
import Profile from "./Profile";
import Paginate from "./Paginate";

const Profiles = () => {
  const {
    error,
    loading,
    profiles,
    getProfiles,
    pageNumber,
    profilesPerPage,
  } = useContext(GlobalContext);

  useEffect(() => {
    getProfiles();
  }, []);

  const indexOfLastProfile = pageNumber * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  const pages = +profiles.length / profilesPerPage;

  return loading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <>
      <div className="profiles mt-4">
        {profiles.length === 0 ? (
          <p>No profiles found</p>
        ) : (
          currentProfiles.map((profile) => (
            <Profile key={profile.UserName} profile={profile} />
          ))
        )}
      </div>
      {profiles.length > 0 && <Paginate />}
    </>
  );
};

export default Profiles;
