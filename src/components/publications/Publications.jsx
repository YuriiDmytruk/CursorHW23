import React from "react";
import {useSelector} from "react-redux";

import Publication from "../publication/Publication.jsx";

import PublicationsS from "../styledComponents/PublicationsS.js";

function Publications() {
  const publications = useSelector((state) => state.publications);
  return (
    <PublicationsS>
      {publications.map((e) => (
        <Publication key={e.id} publication={e} />
      ))}
    </PublicationsS>
  );
}


export default Publications;
