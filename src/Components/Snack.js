import React from "react";
import {Link} from "react-router-dom";
const Snack = ({ snack, index }) => {
  return (
    <tr>
      <td>
        <Link to={`/snacks/${index}`}>
          <img
            src={snack.image}
            alt={`${snack.name} img`}
            width="42"
            height="42"
          />
          {snack.name}
        </Link>
      </td>
      <td>  {snack.is_healthy ? (
          <span>❤️</span>
        ) : <span> ♡ </span>}</td>
    </tr>
  );
};

export default Snack;
