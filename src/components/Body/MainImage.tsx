import React, { FC } from "react";
import { Link } from "react-router-dom";

const MainImage: FC = () => {
  return (
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
                to="/counseling"
                className="p-main-image__inquiry c-button c-button__inquiry"
              >
                無料カウンセリング申し込み
              </Link>
              <a href="./#contact" className="c-button c-button__contact">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
