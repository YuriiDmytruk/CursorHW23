import {
  ADD_PUBLICATION,
  CHANGE_COMMENTS,
  CHANGE_LIKES,
  CHANGE_RETWEETS,
} from "./types.js";

export const addPublication = (publication) => {
  return {
    type: ADD_PUBLICATION,
    payload: publication,
  };
};

export const changeComments = (id, key) => {
  return {
    type: CHANGE_COMMENTS,
    id: id,
    key: key,
  };
};

export const changeLikes = (id, key) => {
    return {
        type: CHANGE_LIKES,
        id: id,
        key: key,
      };
};

export const changeRetweets = (id, key) => {
    return {
        type: CHANGE_RETWEETS,
        id: id,
        key: key,
      };
};
