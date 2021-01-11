import React, { FC } from "react";
import { Link } from "react-router-dom";
import MainImg from "images/main/hero.jpg";
import BannerImg from "images/main/banner.jpg";

const MainImage: FC = () => {
  return (
    <>
      <div className="p-main-image">
        <img
          src={MainImg}
          alt="サイバーエルダーズ"
          className="p-main-image__image"
        />
        <div className="p-main-image__container">
          <div className="p-main-image__noticearea">
            <h1 className="p-main-image__copy">
              初心者向けオンライン
              <br />
              プログラミングスクールなら
              <br />
              CYBER ELDERS！
            </h1>
            <div className="p-main-image__button-field">
              <Link
                to="/counseling"
                className="p-main-image__button c-button c-button__inquiry"
              >
                無料カウンセリング申し込み
              </Link>
              <a
                href="./#contact"
                className="p-main-image__button c-button c-button__contact"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-main-image__banner">
        <img
          src={BannerImg}
          alt="サイバーエルダーズ"
          className="p-main-image__banner-img"
        />
        <div className="p-main-image__banner-text-container">
          <p className="p-main-image__banner-title">
            CYBER ELDERSなら
            <br />
            プログラミング未経験でも大丈夫！
          </p>
          <p className="p-main-image__banner-text">
            最適なプラン構築や素晴らしい講師など、
            <br />
            あなたの目的を実現するための環境が揃っています
          </p>
        </div>
      </div>
    </>
  );
};

export default MainImage;
