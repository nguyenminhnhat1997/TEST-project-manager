import {
  GET_PROJECTS,
  CREATE_PROJECT,
  GET_PROJECTS_BY_ID
} from "../actionReducer/type";

const initState = {
  projects: [],
  detailProject: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.dataToStore
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [action.dataToStore, ...state.projects]
      };
    case GET_PROJECTS_BY_ID:
      return {
        ...state,
        detailProject: action.dataToStore
      };
    default:
      return state;
  }
};
