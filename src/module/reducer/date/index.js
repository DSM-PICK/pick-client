import { UPDATE_DATE } from "../../action/date";

const getNow = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  };
};

const dateReducer = (state = getNow(), action) => {
  switch (action.type) {
    case UPDATE_DATE: {
      return getNow();
    }
    default: {
      return state;
    }
  }
};

export default dateReducer;
