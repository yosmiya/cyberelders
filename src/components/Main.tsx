import React, { FC } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router";
import Header from "components/Header/Header";
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
          <div className="p-main-image">
            <div className="p-main-image__inner">
              <div className="p-main-image__container">
                <div className="p-main-image__content">
                  <h1 className="p-main-image__copy">
                    他にはない講師陣！
                    <br />
                    基礎の基礎から教えます！
                  </h1>
                  <div className="p-main-image__button">
                    <Link
                      to="/#contact"
                      className="p-main-image__inquiry c-button c-button__inquiry"
                    >
                      無料カウンセリング申し込み
                    </Link>
                    <Link to="/#contact" className="c-button c-button__contact">
                      お問い合わせ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
