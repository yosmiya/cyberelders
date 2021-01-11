import React from "react";
import ImgTeacher from "images/teacher/teacher.png";
import ImgTeacherAchieve from "images/teacher/teacher_achievement.jpg";

function Teacher() {
  return (
    <section id="teacher" className="u-anchor__adjust">
      <h2 className="p-main__marginRL">講師紹介</h2>
      <div className="p-main__article p-teacher">
        <div className="p-teacher__box p-main__marginRL">
          <div className="p-teacher__img">
            <img src={ImgTeacher} alt="講師" />
          </div>
          <div className="p-teacher__profile">
            <p className="p-main__article-title p-teacher__name">大野 史暁</p>
            <p className="p-main__article-text p-teacher__text">
              大手IT企業で現役エンジニア
              <br />
              ・iOSアプリ開発（Swift,Objective-Cなど）
              <br />
              ・機械学習周り：G検定くらいの範囲＋KerasかPyTorchを使った簡単な実装レベルまで
              <br />
              ・Webシステム開発（PHPなど）
              <br />
              <br />
              ＡI技術を活用した自動走行ロボットレースAWS Deep reacer
              の世界大会で準優勝
            </p>
            <div>
              <img
                src={ImgTeacherAchieve}
                alt="講師"
                className="p-teacher__profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teacher;
