import { GET_PROJECTS, CREATE_PROJECT } from "../actionReducer/type";

const initState = {
  projects: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.dataToStore
      };
    case CREATE_PROJECT:
      state.projects.unshift(action.dataToStore);
    default:
      return state;
  }
};
