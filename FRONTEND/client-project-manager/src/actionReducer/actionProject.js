import axios from "axios";
import { GET_PROJECTS, CREATE_PROJECT } from "./type";

export const getAllProject = () => dispatch => {
  axios
    .get("/api/projects")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_PROJECTS,
        dataToStore: res.data
      });
    })
    .catch(res => console.log(res.response.data));
};

export const createProject = (project, history) => dispatch => {
  axios.post("/api/projects", project).then(res => {
    dispatch({
      type: CREATE_PROJECT,
      dataToStore: res.data
    });
    history.push("/create-project");
  });
};
