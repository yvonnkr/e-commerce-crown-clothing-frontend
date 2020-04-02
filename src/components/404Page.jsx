import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary/ErrorBoundary.styles";

const NotFound = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
      <ErrorImageText>Sorry, this page does not exist!</ErrorImageText>
      <Link to="/">
        <h1>Back Home</h1>
      </Link>
    </ErrorImageOverlay>
  );
};

export default NotFound;
