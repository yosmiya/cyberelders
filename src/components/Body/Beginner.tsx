import React from "react";
import Img01 from "images/beginner/img01.jpg";
import Img02 from "images/beginner/img02.jpg";

function Beginner() {
  return (
    <section id="beginner" className="u-anchor__adjust">
      <h2 className="p-main__marginRL">特徴</h2>
      <div className="p-main__article">
        <div className="p-main__flexbox">
          <div className="p-main__flexbox-img">
            <img src={Img01} alt="" />
          </div>
          <div className="p-main__flexbox-text p-main__marginRL">
            <p className="p-main__article-title p-main__flexbox-header">
              お一人おひとりに合わせた最適なプラン
            </p>
            <p className="p-main__article-text p-main__flexbox-contents">
              CYBER ELDERSのオンラインプログラミングスクールは
              <br />
              「プログラミング未経験の方」に配慮された構成となっております。
              <br />
              プログラミング以外の部分にもしっかりと目を向けて、受講生の皆様が楽しみながら「目的達成」に貢献できる場を提供していきたいと思います。
              <br />
              目的に応じたオリジナルのカリキュラムをもとに、お一人おひとりに合わせた最適なプランをご提供します。
              <br />
            </p>
          </div>
        </div>
        <div className="p-main__flexbox">
          <div className="p-main__flexbox-img">
            <img src={Img02} alt="" />
          </div>
          <div className="p-main__flexbox-text p-main__marginRL">
            <p className="p-main__article-title p-main__flexbox-header">
              講師はAI走行ロボットレースの世界大会で準優勝
            </p>
            <p className="p-main__article-text p-main__flexbox-contents">
              Amazon主催のAI技術を活用した自動走行ロボットレースの世界大会で準優勝に輝いた講師のマンツーマンレッスンが受けられます。
              <br />
              また経験豊富な現役エンジニアにslackでいつでも質問ができます。
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beginner;
