import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkExperience from "./workExperience/WorkExperience";
import WorkExperience1 from "./workExperience1/WorkExperience1";
import Certifications from "./certifications/Certifications";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  return (
    <div>
      <StyleProvider value={{ changeTheme: () => {} }}>
        <>
          <Header />
          <Greeting />
          <WorkExperience />
          <WorkExperience1 />
          <Certifications/>
          <StartupProject />
          <Education />
          <Profile />
          <ScrollToTopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;
