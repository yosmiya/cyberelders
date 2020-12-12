import React from "react";

function Teacher() {
  return (
    <section id="teacher" className="u-anchor__adjust">
      <h2>講師紹介</h2>
      <div className="p-teacher">
        <table className="c-table">
          <tbody>
            <tr>
              <th>名前</th>
              <td>大野 史暁</td>
            </tr>
            <tr>
              <th>経歴</th>
              <td>
                大手IT企業で現役エンジニア
                <br />
                ・iOSアプリ開発（Swift,Objective-Cなど）
                <br />
                ・機械学習周り：G検定くらいの範囲＋KerasかPyTorchを使った簡単な実装レベルまで
                <br />
                ・Webシステム開発（PHPなど）
              </td>
            </tr>
            <tr>
              <th>実績</th>
              <td>
                ＡI技術を活用した自動走行ロボットレースAWS Deep reacer
                の世界大会で準優勝
              </td>
            </tr>
            <tr>
              <th>担当</th>
              <td></td>
            </tr>
            <tr>
              <th>コメント</th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Teacher;
