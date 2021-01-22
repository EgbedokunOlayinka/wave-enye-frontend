export default (state, action) => {
  switch (action.type) {
    case "GET_PROFILES_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_PROFILES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        originalProfiles: action.payload,
        profiles: action.payload,
      };
    case "GET_PROFILES_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something went wrong. Please retry",
      };
    case "SET_PAGE_NUMBER":
      return {
        ...state,
        pageNumber: action.payload,
      };
    case "SET_GENDER":
      return {
        ...state,
        globalGender: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        searchKey: action.payload,
      };
    case "SEARCH_PROFILES":
      return {
        ...state,
        profiles: action.payload,
      };
    case "SET_METHODS":
      return {
        ...state,
        globalMethods: action.payload,
      };

    default:
      return state;
  }
};
