import React, { FC, useState } from "react";
import useForm from "./useForm";
import validate from "./CounselingFormValidationRules";
import Complete from "components/Counseling/Complete";

const Counseling: FC = () => {
  const [isShowCourse, setIsShowCourse] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseList, setCourseList] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cssDispDialog, setCssDispDialog] = useState("");

  const sendData = () => {
    if (
      values.name === "" ||
      values.name === undefined ||
      values.name === null
    ) {
      return;
    }

    const setCounselingData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "http://localhost/Sites/cyberelders/api/counseling.php",
          {
            method: "POST",
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          alert("申し訳ございません、再度お試しください");
        } else {
          // const jsonResponse = await response.json();
          // console.log(jsonResponse);
          handleShowDialog();
        }
      } catch (error) {
        alert("申し訳ございません、再度お試しください");
      } finally {
        setIsLoading(false);
      }
    };

    setCounselingData();
  };

  const changeDispDialogCss = (isDispDialog: boolean) => {
    return isDispDialog
      ? setCssDispDialog("c-modal--show")
      : setCssDispDialog("");
  };

  const handleShowDialog = () => {
    changeDispDialogCss(true);
  };

  const handleCloseDialog = () => {
    changeDispDialogCss(false);
  };

  const {
    values,
    errors,
    handleChange,
    handleTextareaChange,
    handleSelectChange,
    handleSubmit,
  } = useForm(sendData, validate);

  let courses: { [index: string]: { title: string; value: string[] } } = {};

  courses = {
    ai: {
      title: "どの分野に興味がありますか？",
      value: ["機械学習", "アプリ制作", "資格取得"],
    },
    python: {
      title: "どんなアプリが作りたいですか？",
      value: ["SNS", "ポータル", "Item2-3"],
    },
    ios: {
      title: "iosのテストタイトル",
      value: ["Item3-1", "Item3-2", "Item3-3"],
    },
    other: {
      title: "otherのテストタイトル",
      value: ["Item4-1", "Item4-2", "Item4-3"],
    },
  };

  const changeCourse = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(e);

    if (e.target.value === "") {
      setIsShowCourse(false);
    } else {
      setIsShowCourse(true);
      setCourseTitle(courses[e.target.value].title);
      setCourseList(courses[e.target.value].value);
    }
  };

  return (
    <section id="counseling" className="p-counseling">
      <h2 className="p-counseling__title">無料カウンセリング</h2>
      <div className="p-articles">
        <div className="p-article">
          こちらは無料カウンセリングページです。
          <br />
          どのコースをご希望なのか、ご自身がどうなりたいのかなどお答えいただければと思います。
        </div>
        <div className="p-article">
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">ご興味のある分野</span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <div>
                <span className="c-form-content__header">
                  ご興味のあるコースはどちらになりますか？
                </span>
                <select
                  name="course1"
                  className="c-form-content__select u-mb10"
                  onChange={changeCourse}
                  required
                >
                  <option value=""></option>
                  <option value="ai">AI</option>
                  <option value="python">Python</option>
                  <option value="ios">iOSアプリ制作</option>
                  <option value="other">未定</option>
                </select>
              </div>
              {isShowCourse && (
                <React.Fragment>
                  <div>
                    <span className="c-form-content__header">
                      {courseTitle}
                    </span>
                    <select
                      className="c-form-content__select u-mb10"
                      name="course2"
                      onChange={handleSelectChange}
                    >
                      <option value=""></option>
                      {courseList.map((course, index) => {
                        return <option key={index}>{course}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <span className="c-form-content__header">
                      いつまでに作りたいですか？
                    </span>
                    <select
                      className="c-form-content__select u-mb10"
                      name="course3"
                      onChange={handleSelectChange}
                    >
                      <option></option>
                      <option>開始月から半年以内</option>
                      <option>開始月から1年</option>
                    </select>
                  </div>
                  <div>
                    <span className="c-form-content__header">
                      学習の動機は何ですか？
                    </span>
                    <select
                      className="c-form-content__select"
                      name="course4"
                      onChange={handleSelectChange}
                    >
                      <option></option>
                      <option>就職・転職のため</option>
                      <option>今の仕事に活かすため</option>
                      <option>資格取得のため</option>
                      <option>趣味</option>
                      <option>その他</option>
                    </select>
                  </div>
                </React.Fragment>
              )}
            </div>
            {errors.course1 && <p className="c-error">{errors.course1}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">現在のお仕事</span>
            </div>
            <div className="p-form__body c-form-content">
              <input
                type="text"
                className="c-form-content__input"
                name="job"
                onChange={handleChange}
                value={values.job || ""}
              />
            </div>
            {errors.job && <p className="c-error">{errors.job}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">
                プログラミングのご経験
              </span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <select
                className="c-form-content__select"
                name="exp"
                onChange={handleSelectChange}
              >
                <option></option>
                <option>全くの未経験</option>
                <option>人がやっているのを見た</option>
                <option>自分でプログラミングしたことあり（趣味可）</option>
              </select>
            </div>
            {errors.exp && <p className="c-error">{errors.exp}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">氏名</span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <input
                type="text"
                placeholder="例）差居場　絵留子"
                className="c-form-content__input"
                name="name"
                onChange={handleChange}
                value={values.name || ""}
              />
            </div>
            {errors.name && <p className="c-error">{errors.name}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">フリガナ</span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <input
                type="text"
                placeholder="例）サイバ　エルコ"
                className="c-form-content__input"
                name="kana"
                onChange={handleChange}
                value={values.kana || ""}
              />
            </div>
            {errors.kana && <p className="c-error">{errors.kana}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">メールアドレス</span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <input
                type="text"
                placeholder="例）example@cyberelders.co.jp"
                className="c-form-content__input"
                name="mail"
                onChange={handleChange}
                value={values.mail || ""}
              />
            </div>
            {errors.mail && <p className="c-error">{errors.mail}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">ご質問・ご要望</span>
            </div>
            <div className="p-form__body c-form-content">
              <textarea
                className="c-form-content__input u-h150"
                name="other"
                onChange={handleTextareaChange}
                value={values.other || ""}
              ></textarea>
            </div>
            {errors.other && <p className="c-error">{errors.other}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__body">
              <div>
                {isLoading ? (
                  <input
                    type="button"
                    className=" c-submit c-submit--loading"
                    value="送信中・・・"
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    className=" c-submit"
                    value="同意して送信する"
                    onClick={handleSubmit}
                  />
                )}
              </div>
              {errors.all && (
                <div className="contact_form_error_field">
                  <p className="c-error">{errors.all}</p>
                </div>
              )}
              <div className="p-notice c-notice">
                <span className="c-notice__text">
                  フォームを送信することにより、
                  <a href="#privacypolicy" className="c-notice__link">
                    プライバシーポリシー
                  </a>
                  に同意します
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Complete
        onClickClose={handleCloseDialog}
        cssDispDialog={cssDispDialog}
      />
    </section>
  );
};

export default Counseling;
