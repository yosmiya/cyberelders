import React from "react";

function Question() {
  return (
    <section id="question" className="p-question u-anchor__adjust">
      <h2 className="p-main__marginRL">よくあるご質問</h2>
      <div className="p-main__article">
        <div className="p-main__marginRL p-question__accordion">
          <details>
            <summary>初心者ですが問題ありませんか？</summary>
            <div>
              問題ありません。初心者の方でも講師がフォロー致します。
              <br />
              ただし、PCの基本的な操作が問題なくでき、期間内に必要な学習時間を確保できることが前提です。
            </div>
          </details>
          <details>
            <summary>学習に必要な環境は何ですか？</summary>
            <div>文章が入る</div>
          </details>
          <details>
            <summary>どんな流れで学習を進めますか？</summary>
            <div>文章が入る</div>
          </details>
          <details>
            <summary>いつまでに休みや遅刻の連絡をすればよいですか？</summary>
            <div>文章が入る</div>
          </details>
          <details>
            <summary>銀行振込のみで分割払いできますか？</summary>
            <div>
              お支払い方方法としましては、銀行振り込みのみです。分割方法も承っておりません。
            </div>
          </details>
          <details>
            <summary>支払期限はいつまでですか</summary>
            <div>文章が入る</div>
          </details>
          <details>
            <summary>領収書の発行はできますか？</summary>
            <div>文章が入る</div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Question;
