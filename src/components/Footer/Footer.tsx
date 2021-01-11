import React from "react";

function Footer() {
  return (
    <footer className="l-footer">
      <div className="p-footer p-main__marginRL">
        <nav>
          <ul className="p-footer__navigation">
            <li className="p-footer__link">
              <a href="#hoge">会社概要</a>
            </li>
            <li className="p-footer__link">
              <a href="#hoge">利用規約</a>
            </li>
            <li className="p-footer__link">
              <a href="#hoge">プライバシーポリシー</a>
            </li>
            <li className="p-footer__link">
              <a href="#hoge">特定商取引法に関する規約</a>
            </li>
            <li className="p-footer__link">
              <a href="#hoge">チャットレッスン規約</a>
            </li>
            <li className="p-footer__link">
              <a href="#hoge">サイトマップ</a>
            </li>
          </ul>
        </nav>
        <p className="p-footer__logo">&copy; cyberelders</p>
      </div>
    </footer>
  );
}

export default Footer;
