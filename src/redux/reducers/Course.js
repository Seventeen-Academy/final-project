const initialStateApi = {
  dataCourse: null,
};

const courseReducer = (state = initialStateApi, action) => {
  if (action.type === "SET_DATA_COURSE") {
    return {
      ...state,
      dataCourse: action.payload,
    };
  }
  return state;
};

export default courseReducer;
