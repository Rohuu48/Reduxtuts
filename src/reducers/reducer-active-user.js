export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case "USER_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
