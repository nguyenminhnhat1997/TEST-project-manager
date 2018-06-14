import axios from "axios";
import { GET_PROJECTS, CREATE_PROJECT, GET_PROJECTS_BY_ID } from "./type";
// LẤY ALL PROJECT
export const getAllProject = () => dispatch => {
  axios
    .get("/api/projects")
    .then(res => {
      dispatch({
        type: GET_PROJECTS,
        dataToStore: res.data
      });
    })
    .catch(res => console.log(res.response.data));
};
//tạo project
export const createProject = (project, history) => dispatch => {
  axios.post("/api/projects", project).then(res => {
    dispatch({
      type: CREATE_PROJECT,
      dataToStore: res.data
    });
    history.push("/create-project");
  });
};
//get project by id
export const getProjectById = id => dispatch => {
  axios.get(`/api/projects/${id}`).then(res => {
    dispatch({
      type: GET_PROJECTS_BY_ID,
      dataToStore: res.data
    });
    // history.push("/create-project");
  });
};
