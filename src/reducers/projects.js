import {
  FETCH_ALL,
  CREATE,
  FETCH_POST,
  LIKE,
} from ".././constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        projects: action.payload.data, 
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case CREATE:
      return { ...state, projects: action.payload };
    case LIKE:
    case FETCH_POST:
      return { ...state, project: action.payload }; //action.payload is the blog
    default:
      return state;
  }
};
