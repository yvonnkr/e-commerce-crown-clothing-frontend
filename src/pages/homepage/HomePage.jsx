import React, { Profiler } from "react";

import Directory from "../../components/directory/Directory";
import { HomePageContainer } from "./HomePage.styles";
// import "./HomePage.scss"; //used styled component instead

const HomePage = () => {
  // throw Error; //to test errorBoundary
  return (
    <HomePageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
