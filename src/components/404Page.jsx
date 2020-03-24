import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry, this page does not exist</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFound;
