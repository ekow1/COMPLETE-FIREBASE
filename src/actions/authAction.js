export const dispatchUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
