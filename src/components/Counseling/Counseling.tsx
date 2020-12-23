import React, { FC, useState } from "react";
import useForm from "./useForm";
import validate from "./Validation";
import Complete from "components/Counseling/Complete";
import ReCAPTCHA from "react-google-recaptcha";
import CharaImage from "images/chara.png";

const Counseling: FC = () => {
  const [isShowCourse, setIsShowCourse] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseList, setCourseList] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cssDispDialog, setCssDispDialog] = useState("");
  const [isDisableSubmit, setIsDisableSubmit] = useState(true);
  const [isHiddenRecaptchaMsg, setIsHiddenRecaptchaMsg] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const verifyCallback = (value: any) => {
    setRecaptchaValue(value);
    setIsDisableSubmit(false);
    setIsHiddenRecaptchaMsg(true);
  };

  const expiredCallback = () => {
    setRecaptchaValue("");
    setIsDisableSubmit(true);
    setIsHiddenRecaptchaMsg(false);
  };

  const sendData = () => {
    if (
      values.name === "" ||
      values.name === undefined ||
      values.name === null
    ) {
      return;
    }

    values.recaptcha = recaptchaValue;

    const setData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("/admin/dev/php/api/counseling.php", {
          method: "POST",
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("申し訳ございません、再度お試しください");
        } else {
          const jsonResponse = await response.json();
          if (!jsonResponse.status) {
            throw new Error(jsonResponse.error);
          } else {
            handleShowDialog();
          }
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setData();
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
      <h2 className="p-counseling__title">
        <img alt="キャラクター" src={CharaImage} className="c-image__chara" />
        無料カウンセリング
      </h2>
      <div className="p-article">
        <div className="p-article__content">
          こちらは無料カウンセリングページです。
          <br />
          どのコースをご希望なのか、ご自身がどうなりたいのかなどお答えいただければと思います。
        </div>
        <div className="p-article__content">
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">ご興味のある分野</span>
              <span className="p-form__notice c-form__notice c-form__notice--must">
                必須
              </span>
            </div>
            <div className="p-form__body">
              <div>
                <span className="c-form__content-header">
                  ご興味のあるコースはどちらになりますか？
                </span>
                <select
                  name="course1"
                  className="c-form__content-select u-mb10"
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
                    <span className="c-form__content-header">
                      {courseTitle}
                    </span>
                    <select
                      className="c-form__content-select u-mb10"
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
                    <span className="c-form__content-header">
                      いつまでに作りたいですか？
                    </span>
                    <select
                      className="c-form__content-select u-mb10"
                      name="course3"
                      onChange={handleSelectChange}
                    >
                      <option></option>
                      <option>開始月から半年以内</option>
                      <option>開始月から1年</option>
                    </select>
                  </div>
                  <div>
                    <span className="c-form__content-header">
                      学習の動機は何ですか？
                    </span>
                    <select
                      className="c-form__content-select"
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
            {errors.course1 && (
              <p className="p-form__errmsg c-error">{errors.course1}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">現在のお仕事</span>
            </div>
            <div className="p-form__body">
              <input
                type="text"
                className="c-form__input"
                name="job"
                onChange={handleChange}
                value={values.job || ""}
              />
            </div>
            {errors.job && (
              <p className="p-form__errmsg c-error">{errors.job}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">プログラミングのご経験</span>
              <span className="p-form__notice c-form__notice c-form__notice--must">
                必須
              </span>
            </div>
            <div className="p-form__body">
              <select
                className="c-form__content-select"
                name="exp"
                onChange={handleSelectChange}
              >
                <option></option>
                <option>全くの未経験</option>
                <option>人がやっているのを見た</option>
                <option>自分でプログラミングしたことあり（趣味可）</option>
              </select>
            </div>
            {errors.exp && (
              <p className="p-form__errmsg c-error">{errors.exp}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">氏名</span>
              <span className="p-form__notice c-form__notice c-form__notice--must">
                必須
              </span>
            </div>
            <div className="p-form__body">
              <input
                type="text"
                placeholder="例）差居場　絵留子"
                className="c-form__input"
                name="name"
                onChange={handleChange}
                value={values.name || ""}
              />
            </div>
            {errors.name && (
              <p className="p-form__errmsg c-error">{errors.name}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">フリガナ</span>
              <span className="p-form__notice c-form__notice c-form__notice--must">
                必須
              </span>
            </div>
            <div className="p-form__body">
              <input
                type="text"
                placeholder="例）サイバ　エルコ"
                className="c-form__input"
                name="kana"
                onChange={handleChange}
                value={values.kana || ""}
              />
            </div>
            {errors.kana && (
              <p className="p-form__errmsg c-error">{errors.kana}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">メールアドレス</span>
              <span className="p-form__notice c-form__notice c-form__notice--must">
                必須
              </span>
            </div>
            <div className="p-form__body">
              <input
                type="text"
                placeholder="例）example@cyberelders.co.jp"
                className="c-form__input"
                name="mail"
                onChange={handleChange}
                value={values.mail || ""}
              />
            </div>
            {errors.mail && (
              <p className="p-form__errmsg c-error">{errors.mail}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form__title">ご質問・ご要望</span>
            </div>
            <div className="p-form__body">
              <textarea
                className="c-form__input u-h150"
                name="other"
                onChange={handleTextareaChange}
                value={values.other || ""}
              ></textarea>
            </div>
            {errors.other && (
              <p className="p-form__errmsg c-error">{errors.other}</p>
            )}
          </div>
          <div className="p-form">
            <div className="p-form__submit">
              <div className="p-form__recaptcha">
                <ReCAPTCHA
                  sitekey="6LeuUQwaAAAAAGjn93Nj-NAQSAAqW2VNTdkEUhuT"
                  onChange={verifyCallback}
                  onExpired={expiredCallback}
                />
                <span
                  className={`p-form__recaptcha-caution c-text--caution ${
                    isHiddenRecaptchaMsg && "u-display--hidden"
                  }`}
                >
                  送信するにはチェックを入れてください
                </span>
              </div>
              {isLoading ? (
                <input
                  type="button"
                  className="c-button c-button__submit c-button--loading"
                  value="送信中・・・"
                  disabled
                />
              ) : (
                <input
                  type="submit"
                  className="c-button c-button__submit"
                  value="同意して送信する"
                  onClick={handleSubmit}
                  disabled={isDisableSubmit}
                />
              )}
            </div>
            {errors.all && (
              <p className="p-form__errmsg c-error">{errors.all}</p>
            )}
            <div className="p-optin c-notice">
              <span className="p-optin__text">
                フォームを送信することにより、
                <a href="#privacypolicy" className="p-optin__link">
                  プライバシーポリシー
                </a>
                に同意します
              </span>
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
