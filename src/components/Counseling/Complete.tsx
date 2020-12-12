import React, { FC } from "react";
import Complete from "components/Complete/Complete";

type Props = {
  onClickClose: () => void;
  cssDispDialog: string;
};

const CompleteComponent: FC<Props> = ({ onClickClose, cssDispDialog }) => {
  const completeMessage = `無料カウンセリングのお申し込みありがとうございます。
お問い合わせについては可能な限り1営業日以内に
返信させて頂きますが、
最大3営業日掛かる場合がございますので、予めご了承ください。`;

  return (
    <>
      <Complete
        onClickClose={onClickClose}
        cssDispDialog={cssDispDialog}
        completeMessage={completeMessage}
      />
    </>
  );
};

export default CompleteComponent;
