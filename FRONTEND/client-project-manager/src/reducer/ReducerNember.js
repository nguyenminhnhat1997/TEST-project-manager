import { GET_NEMBER, CREATE_NEMBER } from "../actionReducer/type";

const initState = {
  nembers: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_NEMBER:
      return {
        ...state,
        nembers: action.dataToStore
      };
    case CREATE_NEMBER:
      return {
        ...state,
        nembers: [action.dataToStore, ...state.nembers]
      };
    default:
      return state;
  }
};
