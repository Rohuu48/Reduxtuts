//actionCreator
//on calling actioncreator, our action is dispatched
export const selectUser = (user) => {
  console.log("You clicked on user: ", user);
  //action
  return {
    type: "USER_SELECTED",
    payload: user,
  };
};
