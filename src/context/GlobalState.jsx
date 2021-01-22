import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  profiles: [],
  originalProfiles: [],
  pageNumber: 1,
  searchKey: "",
  gender: "all",
  payment: [],
  loading: false,
  error: null,
  profilesPerPage: 20,
  globalGender: "all",
  globalMethods: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getProfiles() {
    try {
      dispatch({
        type: "GET_PROFILES_LOADING",
      });

      const { data } = await axios.get(
        "https://api.enye.tech/v1/challenge/records"
      );

      const filteredOne = filterGender(
        data.records.profiles,
        state.globalGender
      );

      dispatch({
        type: "GET_PROFILES_SUCCESS",
        payload: filteredOne,
      });
    } catch (error) {
      dispatch({
        type: "GET_PROFILES_ERROR",
      });
    }
  }

  function setPageNumber(val) {
    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: val,
    });
  }

  function modifyMethod(val) {
    const arr = [...state.globalMethods];
    const index = arr.findIndex((item) => item === val);
    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(val);
    }

    dispatch({
      type: "SET_METHODS",
      payload: arr,
    });

    const filteredOne = filterMethods(state.originalProfiles, arr);
    const filteredTwo = filterSearch(filteredOne, state.searchKey);
    const filteredThree = filterGender(filteredTwo, state.globalGender);

    dispatch({
      type: "SEARCH_PROFILES",
      payload: filteredThree,
    });

    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: 1,
    });
  }

  function setGlobalGender(val) {
    dispatch({
      type: "SET_GENDER",
      payload: val,
    });

    const filtered = filterGender(state.originalProfiles, val);
    const searched = filterSearch(filtered, state.searchKey);
    const filteredFinal = filterMethods(searched, state.globalMethods);

    dispatch({
      type: "SEARCH_PROFILES",
      payload: filteredFinal,
    });

    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: 1,
    });
  }

  function searchProfiles(val) {
    dispatch({
      type: "SET_SEARCH",
      payload: val,
    });

    const searched = [];
    state.originalProfiles.forEach((profile) => {
      let fullName = profile.FirstName + " " + profile.LastName;
      if (fullName.toLowerCase().includes(val.toLowerCase())) {
        searched.push(profile);
      }
    });

    const filtered = filterGender(searched, state.globalGender);
    const filteredFinal = filterMethods(filtered, state.globalMethods);

    dispatch({
      type: "SEARCH_PROFILES",
      payload: filteredFinal,
    });

    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: 1,
    });
  }

  function filterGender(arr, gender) {
    const filtered = [];
    arr.forEach((item) => {
      if (gender === "all") {
        filtered.push(item);
      } else if (item.Gender.toLowerCase() === gender) {
        filtered.push(item);
      }
    });

    return filtered;
  }

  function filterSearch(arr, key) {
    const searched = [];
    arr.forEach((profile) => {
      let fullName = profile.FirstName + " " + profile.LastName;
      if (fullName.toLowerCase().includes(key.toLowerCase())) {
        searched.push(profile);
      }
    });

    return searched;
  }

  function filterMethods(arr, methods) {
    const filtered = [];
    arr.forEach((item) => {
      if (methods.includes(item.PaymentMethod.toLowerCase())) {
        filtered.push(item);
      }
    });

    return filtered;
  }

  return (
    <GlobalContext.Provider
      value={{
        profiles: state.profiles,
        originalProfiles: state.originalProfiles,
        pageNumber: state.pageNumber,
        searchKey: state.searchKey,
        gender: state.gender,
        payment: state.payment,
        loading: state.loading,
        error: state.error,
        profilesPerPage: state.profilesPerPage,
        globalGender: state.globalGender,
        globalMethods: state.globalMethods,
        getProfiles,
        setPageNumber,
        searchProfiles,
        setGlobalGender,
        modifyMethod,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
