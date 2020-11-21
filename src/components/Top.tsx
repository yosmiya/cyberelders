import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import "css/Top.scss";
import Header from "components/Header/Header";
import Beginner from "components/Body/Beginner";
import Teacher from "components/Body/Teacher";
import Course from "components/Body/Course";
import Question from "components/Body/Question";
import Contact from "components/Form/Contact";
import Footer from "components/Footer/Footer";
import Counseling from "components/Counseling/Counseling";

function Top() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/">
          <div className="main_image">
            <div className="main_image_inner">
              <h1>キャッチコピー</h1>
            </div>
          </div>

          <main className="main-container">
            <Beginner />
            <Teacher />
            <Course />
            <Question />
            <Contact />
          </main>
        </Route>
        <Route exact path="/counseling">
          <main className="main-container">
            <Counseling />
          </main>
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Top;
