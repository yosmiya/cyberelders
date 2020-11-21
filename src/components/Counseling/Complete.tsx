import React, { FC } from "react";

type Props = {
  onClickClose: () => void;
  cssDispDialog: string;
};

const Complete: FC<Props> = ({ onClickClose, cssDispDialog }) => (
  <>
    <div className="l-modal">
      <input type="checkbox" className="l-modal__check" id="modal-check" />
      <div className={`l-modal__body ${cssDispDialog}`}>
        <div className="l-modal__window">
          <div className="l-modal__inner">
            <div className="l-modal__content">
              <h3>送信完了しました</h3>
              <div>
                無料カウンセリングのお申し込みありがとうございます。
                <br />
                お問い合わせについては可能な限り1営業日以内に
                <br />
                返信させて頂きますが、
                <br />
                最大3営業日掛かる場合がございますので、予めご了承ください。
              </div>
              <div className="l-modal__form">
                <input
                  type="button"
                  value="閉じる"
                  className="c-btn c-btn__close"
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
