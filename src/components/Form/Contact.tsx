import React, { FC, useState } from "react";
import useForm from "./useForm";
import validate from "./ContactFormValidationRules";
import Complete from "components/Form/Complete";

const Contact: FC = () => {
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

        const response = await fetch("/admin/dev/php/api/contacts.php", {
          method: "POST",
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("例外が発生");
        } else {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          if (!jsonResponse.status) {
            throw new Error("例外が発生");
          } else {
            handleShowDialog();
          }
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
    handleSubmit,
  } = useForm(sendData, validate);

  return (
    <section id="contact" className="main-contact">
      <h2>お問い合わせ</h2>
      <div className="p-articles">
        <div className="p-article">
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">氏名</span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <input
                type="text"
                className="c-form-content__input"
                placeholder="例）差居場　絵留子"
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
                className="c-form-content__input"
                placeholder="例）サイバ　エルコ"
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
                className="c-form-content__input"
                placeholder="例）example@cyberelders.co.jp"
                name="mail"
                onChange={handleChange}
                value={values.mail || ""}
              />
            </div>
            {errors.mail && <p className="c-error">{errors.mail}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">件名</span>
            </div>
            <div className="p-form__body c-form-content">
              <input
                type="text"
                className="c-form-content__input"
                name="title"
                onChange={handleChange}
                value={values.title || ""}
              />
            </div>
            {errors.title && <p className="c-error">{errors.title}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__header">
              <span className="c-form-header__title">お問い合わせ内容</span>
              <span className="c-form__notice c-form__notice--must">必須</span>
            </div>
            <div className="p-form__body c-form-content">
              <textarea
                className="c-form-content__input u-h150"
                name="inquiry"
                onChange={handleTextareaChange}
                value={values.inquiry || ""}
              ></textarea>
            </div>
            {errors.inquiry && <p className="c-error">{errors.inquiry}</p>}
          </div>
          <div className="p-form">
            <div className="p-form__body">
              <div>
                {isLoading ? (
                  <input
                    type="button"
                    className="c-submit c-submit--loading"
                    value="送信中・・・"
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    className="c-submit"
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
              <div className="p-notice c-notice">
                <span className="c-notice__text">
                  ※注意事項
                  <br />
                  ・お問い合わせについては可能な限り1営業日以内に返信させて頂きますが、最大3営業日掛かる場合がございますので、予めご了承ください。
                  <br />
                  ・お問い合わせの前に、
                  <a href="#question" className="c-notice__link">
                    よくある質問
                  </a>
                  をご確認ください。
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

export default Contact;
