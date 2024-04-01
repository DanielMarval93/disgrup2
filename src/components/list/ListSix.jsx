import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Programación y Diseño",
  "Diseño UI/Ux",
  "Motion Graphics",
];

const ListSix = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li key={i}>
          <Link className="has-black-color" to="/service">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListSix;
