import { Add_DETAILS } from "../constants";

const senders = action => {
  return {
    post: action.post,
    heading: action.heading,
    description: action.description
  };
};
const sender = (state = [], action) => {
  let sender = null;
  switch (action.type) {
    case Add_DETAILS:
      sender = [...state, senders(action)];
      return sender;
    // case
    default:
      return state;
  }
};
export default sender;
