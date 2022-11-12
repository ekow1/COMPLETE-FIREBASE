let initialState = {
  users: [],
};

let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
