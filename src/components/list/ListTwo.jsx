import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "SEM & Google Ads",
  "Social Ads",
  "Captación de Leads",
  "Branded Content",
];

const ListTwo = () => {
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

export default ListTwo;
