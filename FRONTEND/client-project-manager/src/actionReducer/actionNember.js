import axios from "axios";
import { GET_NEMBER, CREATE_NEMBER } from "./type";

export const getAllNember = () => dispatch => {
  axios
    .get("/api/nembers")
    .then(res => {
      dispatch({
        type: GET_NEMBER,
        dataToStore: res.data
      });
    })
    .catch(res => console.log(res.response.data));
};

export const createNember = (nember, history) => dispatch => {
  axios.post("/api/nembers", nember).then(res => {
    dispatch({
      type: CREATE_NEMBER,
      dataToStore: res.data
    });
    history.push("/create-nember");
  });
};
