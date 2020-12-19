import React, { FC, useState } from "react";
import LogoImage from "images/logo.png";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [stateOpenSpMenu, setStateOpenSpMenu] = useState(false);
  const closeSpNav = () => {
    setStateOpenSpMenu(false);
  };
  const openSpNav = () => {
    setStateOpenSpMenu(!stateOpenSpMenu);
  };

  return (
    <header className="l-header p-header">
      <div className="p-header__pc">
        <div className="c-logo">
          <Link to="/">
            <img
              alt="サイバーエルダーズ"
              src={LogoImage}
              className="c-logo__image"
            />
          </Link>
        </div>
        <nav className="p-header__navigation c-navigation">
          <ul>
            <li className="c-navigation__list">
              <a href="./#beginner" className="c-navigation__link">
                初めての方へ
              </a>
            </li>
            <li className="c-navigation__list">
              <a href="./#teacher" className="c-navigation__link">
                講師紹介
              </a>
            </li>
            <li className="c-navigation__list">
              <a href="./#course" className="c-navigation__link">
                コース
              </a>
            </li>
            <li className="c-navigation__list">
              <a href="./#question" className="c-navigation__link">
                よくある質問
              </a>
            </li>
            <li className="c-navigation__list">
              <a href="./#contact" className="c-navigation__link">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-header__inquiry">
          <Link
            to="/counseling"
            className="c-button c-button__inquiry c-button__inquiry--header"
          >
            無料カウンセリング申し込み
          </Link>
        </div>
      </div>

      <div className="p-header__sp">
        <div className="c-logo">
          <Link to="/">
            <img
              alt="サイバーエルダーズ"
              src={LogoImage}
              className="c-logo__image"
            />
          </Link>
        </div>
        <div className="p-header__menu">
          <input
            type="checkbox"
            id="c-menu__checkbox--id"
            className="c-menu__checkbox"
            onChange={openSpNav}
            checked={stateOpenSpMenu}
          />
          <label className="c-menu" htmlFor="c-menu__checkbox--id">
            <div className="c-menu__inner">
              <div className="c-menu__inner--line"></div>
              <div className="c-menu__inner--line"></div>
              <div className="c-menu__inner--line"></div>
              <div className="c-menu__inner--label">MENU</div>
            </div>
          </label>
          <nav className="p-header__navigation c-navigation">
            <ul>
              <li className="c-navigation__list">
                <a
                  href="./#beginner"
                  className="c-navigation__link"
                  onClick={closeSpNav}
                >
                  初めての方へ
                </a>
              </li>
              <li className="c-navigation__list">
                <a
                  href="./#teacher"
                  className="c-navigation__link"
                  onClick={closeSpNav}
                >
                  講師紹介
                </a>
              </li>
              <li className="c-navigation__list">
                <a
                  href="./#course"
                  className="c-navigation__link"
                  onClick={closeSpNav}
                >
                  コース
                </a>
              </li>
              <li className="c-navigation__list">
                <a
                  href="./#question"
                  className="c-navigation__link"
                  onClick={closeSpNav}
                >
                  よくある質問
                </a>
              </li>
              <li className="c-navigation__list">
                <a
                  href="./#contact"
                  className="c-navigation__link"
                  onClick={closeSpNav}
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
            <div className="p-header__inquiry">
              <Link
                to="/counseling"
                className="c-button c-button__inquiry"
                onClick={closeSpNav}
              >
                無料カウンセリング申し込み
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
