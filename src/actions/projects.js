import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  LIKE,
  FETCH_POST,
} from "../constants/actionTypes";

export const getProjects = (page) => async (dispatch) => {
  try {
    const {data}  = await api.fetchProjects(page);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProject(id);
    console.log(data);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createProject = (project, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE, payload: data.ProjectPosts });
  } catch (error) {
    console.log(error);
  }
  navigate("/");
  window.location.reload(false);
};
export const likeProject = (id, navigate) => async (dispatch) => {
  try {
    const { data } = api.likeProject(id);
    dispatch({ type: LIKE, payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
  alert("Successfully made changes! Please reload to see the changes");

  // window.location.reload(false)
};
