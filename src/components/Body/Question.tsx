import React from "react";
import "css/Body/Question.scss";

function Question() {
  return (
    <section id="question" className="main-question">
      <h2>よくあるご質問</h2>
      <div className="main-contents">
        <div className="main-article">
          <nav className="question_accordion">
            <label htmlFor="menu1">教材・カリキュラム</label>
            <input type="checkbox" id="menu1" className="toggle" />
            <ul>
              <label htmlFor="menu1_1">
                CYBER ELDERSのカリキュラムに特徴はありますか？
              </label>
              <input type="checkbox" id="menu1_1" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu1.2</span>
                </li>
              </ul>

              <label htmlFor="menu1_2">
                CYBER ELDERSオリジナル教材の教材費はいくらかかりますか？
              </label>
              <input type="checkbox" id="menu1_2" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu1.2</span>
                </li>
              </ul>

              <label htmlFor="menu1_3">
                カリキュラム以外の内容についても質問・相談することは可能でしょうか？
              </label>
              <input type="checkbox" id="menu1_3" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu1.2</span>
                </li>
              </ul>

              <label htmlFor="menu1_4">
                現在取り扱っている言語以外の追加は考えていますか？
              </label>
              <input type="checkbox" id="menu1_4" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu1.2</span>
                </li>
              </ul>
            </ul>
            <label htmlFor="menu2">CYBER ELDERSについて</label>
            <input type="checkbox" id="menu2" className="toggle" />
            <ul>
              <label htmlFor="menu2_1">
                CYBER ELDERSのカリキュラムに特徴はありますか？
              </label>
              <input type="checkbox" id="menu2_1" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu2.2</span>
                </li>
              </ul>

              <label htmlFor="menu2_2">
                CYBER ELDERSオリジナル教材の教材費はいくらかかりますか？
              </label>
              <input type="checkbox" id="menu2_2" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu2.2</span>
                </li>
              </ul>

              <label htmlFor="menu2_3">
                カリキュラム以外の内容についても質問・相談することは可能でしょうか？
              </label>
              <input type="checkbox" id="menu2_3" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu2.2</span>
                </li>
              </ul>

              <label htmlFor="menu2_4">
                現在取り扱っている言語以外の追加は考えていますか？
              </label>
              <input type="checkbox" id="menu2_4" className="toggle" />
              <ul>
                <li className="menu_f2">
                  <span>menu2.2</span>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Question;
