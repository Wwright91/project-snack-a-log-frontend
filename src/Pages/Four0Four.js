import React from "react";
import { Link } from "react-router-dom";

import spaceman from "../assets/space-404.jpg";

const Four0Four = () => {
  return (
    <div className="text-center error">
      <h1>Oh No, This Isn't Where We Keep The Marshmellows!</h1>
      <h3>
        Return{" "}
        <Link className="return-home" to="/">
          Home
        </Link>
      </h3>
      <img src={spaceman} alt="spaceman" width="800px" height="600px" />
    </div>
  );
};

export default Four0Four;
