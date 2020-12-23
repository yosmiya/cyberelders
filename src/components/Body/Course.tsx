import React from "react";
import CharaImage from "images/chara.png";

function Course() {
  return (
    <section id="course" className="u-anchor__adjust">
      <h2>
        <img alt="キャラクター" src={CharaImage} className="c-image__chara" />
        コース
      </h2>
      <div className="p-main__article">
        ・AI×pythonコース
        <br />
        ・iPhone／iOSアプリ開発コース（Swift,Objective-Cなど）
        <br />
        ・WEBシステム開発コース（PHP）
        <br />
        <br />
        当スクールでは意図的に固定のカリキュラムをご用意しておりません。
        <br />
        なぜなら、受講の目的は受講生一人一人異なり、必要とする勉強もまた異なります。
        <br />
        就職・転職の為、今の仕事に活かす為、資格取得の為、趣味の為、また別の何かの為、
        <br />
        と動機は異なります。勉強手段にも得手不得手があるかと思います。
        <br />
        受講前のヒアリングをもとに個別のカリキュラムを設定させて頂きたいと思います。
        <br />
        ヒアリングの結果、ご期待に沿えないと判断した場合は「誠実に」その旨をお伝えします。
        <br />
        コースごとに時代の要請があることを書く
        <br />
        <br />
        こんな方におすすめです
        <br />
        身につくスキル 授業料 　　 円 (税別)　 コースの特徴
      </div>
    </section>
  );
}

export default Course;
