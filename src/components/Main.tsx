import React, { FC } from "react";
import { Route } from "react-router";
import Header from "components/Header/Header";
import MainImage from "components/Body/MainImage";
import Beginner from "components/Body/Beginner";
import Teacher from "components/Body/Teacher";
import Course from "components/Body/Course";
import Question from "components/Body/Question";
import Contact from "components/Form/Contact";
import Footer from "components/Footer/Footer";
import Counseling from "components/Counseling/Counseling";
import ScrollToTop from "hooks/ScrollToTop";
import { useTracking } from "hooks/useTracking";

const Main: FC = () => {
  useTracking("G-VZZ4SPWGKJ");

  return (
    <>
      <ScrollToTop />
      <div>
        <Header />
        <Route exact path="/">
          <MainImage />
          <main className="l-main p-main">
            <Beginner />
            <Course />
            <Teacher />
            <Question />
            <Contact />
          </main>
        </Route>
        <Route exact path="/counseling">
          <main className="l-main p-main">
            <Counseling />
          </main>
        </Route>
        <Footer />
      </div>
    </>
  );
};

export default Main;
