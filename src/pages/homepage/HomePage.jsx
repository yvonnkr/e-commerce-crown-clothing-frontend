import React from "react";

import Directory from "../../components/directory/Directory";
import { HomePageContainer } from "./HomePage.styles";
// import "./HomePage.scss"; //used styled component instead

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
