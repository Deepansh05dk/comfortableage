const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case "ADD USER":
      return {
        ...state,
        user: action.item,
      };
    case "ADD TOKEN":
      return {
        ...state,
        token: action.item,
      };
    default:
      return state;
  }
};
export default userDetailsReducer;
