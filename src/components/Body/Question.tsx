import React from "react";

function Question() {
  return (
    <section id="question" className="p-question u-anchor__adjust">
      <h2>よくあるご質問</h2>
      <div className="p-main__article">
        <nav className="c-accordion">
          <label className="c-accordion__title" htmlFor="menu1">
            教材・カリキュラム
          </label>
          <input type="checkbox" id="menu1" className="c-accordion__toggle" />
          <ul className="c-accordion__contens">
            <label className="c-accordion__title" htmlFor="menu1_1">
              CYBER ELDERSのカリキュラムに特徴はありますか？
            </label>
            <input
              type="checkbox"
              id="menu1_1"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu1.2</span>
              </li>
            </ul>

            <label className="c-accordion__title" htmlFor="menu1_2">
              CYBER ELDERSオリジナル教材の教材費はいくらかかりますか？
            </label>
            <input
              type="checkbox"
              id="menu1_2"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu1.2</span>
              </li>
            </ul>

            <label className="c-accordion__title" htmlFor="menu1_3">
              カリキュラム以外の内容についても質問・相談することは可能でしょうか？
            </label>
            <input
              type="checkbox"
              id="menu1_3"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu1.2</span>
              </li>
            </ul>

            <label className="c-accordion__title" htmlFor="menu1_4">
              現在取り扱っている言語以外の追加は考えていますか？
            </label>
            <input
              type="checkbox"
              id="menu1_4"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu1.2</span>
              </li>
            </ul>
          </ul>
          <label className="c-accordion__title" htmlFor="menu2">
            CYBER ELDERSについて
          </label>
          <input type="checkbox" id="menu2" className="c-accordion__toggle" />
          <ul className="c-accordion__contens">
            <label className="c-accordion__title" htmlFor="menu2_1">
              CYBER ELDERSのカリキュラムに特徴はありますか？
            </label>
            <input
              type="checkbox"
              id="menu2_1"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu2.2</span>
              </li>
            </ul>

            <label className="c-accordion__title" htmlFor="menu2_2">
              CYBER ELDERSオリジナル教材の教材費はいくらかかりますか？
            </label>
            <input
              type="checkbox"
              id="menu2_2"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu2.2</span>
              </li>
            </ul>

            <label className="c-accordion__title" htmlFor="menu2_3">
              カリキュラム以外の内容についても質問・相談することは可能でしょうか？
            </label>
            <input
              type="checkbox"
              id="menu2_3"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu2.2</span>
              </li>
            </ul>

            <label className="c-accordion__title" htmlFor="menu2_4">
              現在取り扱っている言語以外の追加は考えていますか？
            </label>
            <input
              type="checkbox"
              id="menu2_4"
              className="c-accordion__toggle"
            />
            <ul className="c-accordion__contens">
              <li className="menu_f2">
                <span>menu2.2</span>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Question;
