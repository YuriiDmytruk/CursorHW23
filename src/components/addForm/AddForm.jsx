import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPublication } from "../../redux/action.js";

import { publicationModel } from "../../models/publicationModel.js";

import AddFormS from "../styledComponents/AddFormS.js";
import Input from "../styledComponents/Input.js";
import Select from "../styledComponents/Select.js";
import Button from "../styledComponents/Button.js";

import Publication from "../publication/Publication.jsx";

const CHARACTERS = [
  {
    authorImgLink:
      "https://cdn.vox-cdn.com/thumbor/g2xlpq1YVNz9ceS6z3VazJ9nUC0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9432879/r_m_sauce.jpg",
    authorName: "Rick Sanchez",
    authorNikName: "@mega_rick",
  },
  {
    authorImgLink:
      "https://sportshub.cbsistatic.com/i/2022/09/19/13683d26-7779-473d-a77a-316402989115/rick-and-morty-season-6-morty-shocked.jpg",
    authorName: "Morty Smith",
    authorNikName: "@morty_smith",
  },
  {
    authorImgLink:
      "https://www.looper.com/img/gallery/the-worst-thing-thats-ever-happened-to-jerry-on-rick-and-morty/intro-1567519981.jpg",
    authorName: "Jerry Smith",
    authorNikName: "@jerry_smith",
  },
  {
    authorImgLink:
      "https://i.pinimg.com/originals/43/1c/b9/431cb98e914a79c01ef4c7267fa3e0aa.png",
    authorName: "Beth Smith",
    authorNikName: "@beth_sanchez",
  },
  {
    authorImgLink:
      "https://i.pinimg.com/originals/93/3f/ce/933fce7bf2db6fed7b2a38569fd5f7c4.png",
    authorName: "Summer Smith",
    authorNikName: "summer_smith",
  },
];

function AddForm() {
  const [state, setState] = useState({
    ...CHARACTERS[0],
    publicationDate: new Date().toLocaleDateString("en-US"),
    comment: "",
    imgLink: "",
    likes: 0,
    comments: 0,
    retweetes: 0,
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    for (let i = 0; i < CHARACTERS.length; i++) {
      if (CHARACTERS[i].authorNikName === event.target.value) {
        setState((existingValues) => ({
          ...existingValues,
          authorImgLink: CHARACTERS[i].authorImgLink,
          authorName: CHARACTERS[i].authorName,
          authorNikName: CHARACTERS[i].authorNikName,
        }));
      }
    }
  };

  const dispatch = useDispatch();

  const add = (event) => {
    const publication = new publicationModel(
      0,
      state.authorImgLink,
      state.authorName,
      state.authorNikName,
      state.publicationDate,
      state.comment,
      state.imgLink,
      state.likes,
      state.comments,
      state.retweetes
    );
      
    
    dispatch(addPublication(publication));
  }

  return (
    <AddFormS>
      <Input
        placeholder="Comment *"
        value={state.comment}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            comment: e.target.value,
          }))
        }
      />
      <Input
        placeholder="Image link *"
        value={state.imgLink}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            imgLink: e.target.value,
          }))
        }
      />
      <Select onChange={handleChange} placeholder="Character">
        {CHARACTERS.map((e) => (
          <option value={e.authorNikName}>{e.authorName}</option>
        ))}
      </Select>
      <Publication publication={state} />
      <Button
        onClick={add}
      >
        Add publication
      </Button>
    </AddFormS>
  );
}

export default AddForm;
