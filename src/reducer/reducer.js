import { Add_DETAILS, DELETE_DETAILS } from "../constants";

const senders = action => {
  return {
    post: action.post,
    heading: action.heading,
    description: action.description,
    disable: action.disable,
    enable: action.enable,
    id: action.id
  };
};
const sender = (state = [], action) => {
  let sender = null;
 
  switch (action.type) {
    case Add_DETAILS:
      (sender = [...state, senders(action)]);
      console.log("data at Reducer ", senders(action));
      console.log("this is sender", sender);
      return sender;
    case DELETE_DETAILS:
      return state.filter((data,i) => i!== action.id);
    default:
      return state;
  }
};
export default sender;
