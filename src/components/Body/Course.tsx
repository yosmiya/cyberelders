import React from "react";
import PythonLogo from "images/course/python_logo.svg";
import SwiftLogo from "images/course/swift_logo.svg";
import PhpLogo from "images/course/php_logo.svg";

function Course() {
  return (
    <section id="course" className="u-anchor__adjust">
      <h2 className="p-main__marginRL">受講可能なコース</h2>
      <div className="p-main__article ">
        <div className="p-course__flexbox p-main__marginRL">
          <div className="p-course__flexbox-item">
            <div className="p-course__flexbox-image">
              <img src={PythonLogo} alt="" />
            </div>
            <div className="p-course__flexbox-title">
              <div className="p-course__flexbox-course">AI×pythonコース</div>
              <div className="p-course__flexbox-text">
                python という言語を習得するための基礎を学びます。
                基礎を学んだあとは、チャットボットや簡単な SNS
                アプリを作成していきます。 ご希望に応じて、AI
                を体感いただけます。
              </div>
            </div>
            <div className="p-course__flexbox-text">
              <p className="p-course__flexbox-sub">身に付くスキル</p>
              <p className="u-mb20">python の基礎 アプリ制作スキル AI 基礎</p>
              <p className="p-course__flexbox-sub">金額</p>
              <p>
                498,000円（税抜き） <br />
                ※教育訓練給付金対象ではありません。
              </p>
            </div>
          </div>
          <div className="p-course__flexbox-item">
            <div className="p-course__flexbox-image">
              <img src={SwiftLogo} alt="" />
            </div>
            <div className="p-course__flexbox-title">
              <div className="p-course__flexbox-course">
                iPhone／iOSアプリ開発コース （Swift,Objective-Cなど）
              </div>
              <div className="p-course__flexbox-text">
                Swiftや Objective-Cという言語を習得するための基礎を学びます。
                基礎を学んだあとは、実際にiOSアプリを開発していきます。
                どのようなアプリが良いかは、ご相談の上決めていきます。
              </div>
            </div>
            <div className="p-course__flexbox-text">
              <p className="p-course__flexbox-sub">身に付くスキル</p>
              <p className="u-mb20">
                Swift,Objective-Cの基礎 iOSアプリ制作スキル
              </p>
              <p className="p-course__flexbox-sub">金額</p>
              <p>
                498,000円（税抜き） <br />
                ※教育訓練給付金対象ではありません。
              </p>
            </div>
          </div>
          <div className="p-course__flexbox-item">
            <div className="p-course__flexbox-image">
              <img src={PhpLogo} alt="" />
            </div>
            <div className="p-course__flexbox-title">
              <div className="p-course__flexbox-course">
                WEBシステム開発コース （PHP）
              </div>
              <div className="p-course__flexbox-text">
                PHPという言語を習得するための基礎を学びます。
                基礎を学んだあとは、実際にアプリを開発していきます。
                どのようなアプリが良いかは、ご相談の上決めていきます。
              </div>
            </div>
            <div className="p-course__flexbox-detail">
              <p className="p-course__flexbox-sub">身に付くスキル</p>
              <p className="u-mb20">PHPの基礎 PHPを用いたアプリ制作スキル</p>
              <p className="p-course__flexbox-sub">金額</p>
              <p>
                498,000円（税抜き） <br />
                ※教育訓練給付金対象ではありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
