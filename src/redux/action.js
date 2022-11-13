import { ADD_PUBLICATION, CHANGE_PUBLICATION } from "./types.js";

export const addPublication = (publication) => {
  return {
    type: ADD_PUBLICATION,
    payload: publication,
  };
};

export const changeComments = (id, key) => {
  return (dispatch, getState) => {
    const items = getState().publications;
    items[id].comments += key;
    dispatch({ type: CHANGE_PUBLICATION, payload: items });
  };
};

export const changeLikes = (id, key) => {
  return (dispatch, getState) => {
    const items = getState().publications;
    items[id].likes += key;
    dispatch({ type: CHANGE_PUBLICATION, payload: items });
  };
};

export const changeRetweets = (id, key) => {
  return (dispatch, getState) => {
    const items = getState().publications;
    items[id].retweetes += key;
    dispatch({ type: CHANGE_PUBLICATION, payload: items });
  };
};
