import React, { FC, useState } from "react";
import "css/Header/Header.scss";
import LogoImage from "images/logo.png";

const Header: FC = () => {
  const [stateOpenSpMenu, setStateOpenSpMenu] = useState(false);
  const closeSpNav = () => {
    setStateOpenSpMenu(false);
  };
  const openSpNav = () => {
    setStateOpenSpMenu(!stateOpenSpMenu);
  };

  return (
    <header>
      <div className="header_inner">
        <div className="pc-menu">
          <div className="l-header-logo">
            <div className="header-logo">
              <a href="/">
                <img alt="logo" src={LogoImage} />
              </a>
            </div>
          </div>
          <nav className="l-header__nav">
            <ul className="global-nav-menu">
              <li>
                <a href="/#beginner">初めての方へ</a>
              </li>
              <li>
                <a href="/#teacher">講師紹介</a>
              </li>
              <li>
                <a href="/#course">コース</a>
              </li>
              <li>
                <a href="/#question">よくある質問</a>
              </li>
              <li>
                <a href="/#contact">お問い合わせ</a>
              </li>
            </ul>
          </nav>
          <div className="global-nav-sns">
            <div className="global-nav-inquiry">
              <a href="/counseling">無料カウンセリング申込み</a>
            </div>
          </div>
        </div>

        <div className="sp-menu">
          <div className="l-header-logo">
            <div className="header-logo">
              <img alt="logo" src={LogoImage} />
            </div>
          </div>
          <div className="l-header__menu">
            <input
              type="checkbox"
              id="sp-nav-checkbox"
              onChange={openSpNav}
              checked={stateOpenSpMenu}
            />
            <label className="sp-nav-btn-category" htmlFor="sp-nav-checkbox">
              <div className="sp-nav-btn">
                <div className="sp-nav-btn-line"></div>
                <div className="sp-nav-btn-line"></div>
                <div className="sp-nav-btn-line"></div>
                <div className="sp-nav-btn-lavel">MENU</div>
              </div>
            </label>
            <nav className="l-header__nav">
              <ul className="global-nav-menu">
                <li>
                  <a href="#beginner" onClick={closeSpNav}>
                    初めての方へ
                  </a>
                </li>
                <li>
                  <a href="#teacher" onClick={closeSpNav}>
                    講師紹介
                  </a>
                </li>
                <li>
                  <a href="#course" onClick={closeSpNav}>
                    コース
                  </a>
                </li>
                <li>
                  <a href="#question" onClick={closeSpNav}>
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeSpNav}>
                    お問い合わせ
                  </a>
                </li>
              </ul>
              <ul className="global-nav-sns">
                <li className="global-nav-inquiry">
                  <a href="/counseling">無料カウンセリングを申し込む</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
