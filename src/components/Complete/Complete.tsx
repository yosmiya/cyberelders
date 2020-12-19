import React, { FC } from "react";

type Props = {
  onClickClose: () => void;
  cssDispDialog: string;
  completeMessage: string;
};

const Complete: FC<Props> = ({
  onClickClose,
  cssDispDialog,
  completeMessage,
}) => (
  <>
    <div className={`c-modal ${cssDispDialog}`}>
      <input type="checkbox" className="c-modal__switchDisp" id="modal-check" />
      <div className="c-modal__body">
        <div className="c-modal__window">
          <div className="c-modal__inner">
            <div className="c-modal__content">
              <p className="c-modal__title">送信完了しました</p>
              <div className="c-modal__thankyou u-text__newline">
                {completeMessage}
              </div>
              <div className="c-modal__form">
                <input
                  type="button"
                  value="閉じる"
                  className="c-button c-button__close"
                  onClick={onClickClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Complete;
