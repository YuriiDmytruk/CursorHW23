import { ADD_PUBLICATION, CHANGE_PUBLICATION } from "./types";

import { publicationModel } from "../models/publicationModel.js";


export const publications = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUBLICATION: {
      return [...state, action.payload];
    }
    case CHANGE_PUBLICATION :{
      return action.payload;
    }
    default:
      return state;
  }
};

const initialState = [
  new publicationModel(
    0,
    "https://cdn.vox-cdn.com/thumbor/g2xlpq1YVNz9ceS6z3VazJ9nUC0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9432879/r_m_sauce.jpg",
    "Rick Sanchez",
    "@mega_rick",
    "10/23/2022",
    "Ordinary friday night",
    "https://www.indiewire.com/wp-content/uploads/2022/08/The-Best-Rick-Sanchez-Moments.png?w=780",
    400,
    123,
    345
  ),
  new publicationModel(
    1,
    "https://cdn.vox-cdn.com/thumbor/g2xlpq1YVNz9ceS6z3VazJ9nUC0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9432879/r_m_sauce.jpg",
    "Rick Sanchez",
    "@mega_rick",
    "10/24/2022",
    "Ordinary saturday morning",
    "https://www.kotaku.com.au/wp-content/uploads/sites/3/2017/08/rick-and-morty-s04-e04-1.jpg?quality=80&resize=1280,720",
    450,
    127,
    342
  ),
];
