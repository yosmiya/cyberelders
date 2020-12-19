import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
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
import ScrollToTop from "components/Common/ScrollToTop";

const Main: FC = () => {
  return (
    <BrowserRouter basename="/admin/dev/build">
      <ScrollToTop />
      <div>
        <Header />
        {/* <Switch> */}
        <Route exact path="/">
          <MainImage />
          <main className="l-main p-main">
            <Beginner />
            <hr />
            <Teacher />
            <hr />
            <Course />
            <hr />
            <Question />
            <hr />
            <Contact />
          </main>
        </Route>
        <Route exact path="/counseling">
          <main className="l-main p-main">
            <Counseling />
          </main>
        </Route>
        {/* <Route>error</Route>
          <Redirect to="/" />
        </Switch> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Main;
