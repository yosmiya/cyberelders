type State = {
  name?: string;
  kana?: string;
  mail?: string;
  title?: string;
  inquiry?: string;
  all?: string;
  recaptcha?: string;
};

const validate = (values: State) => {
  let errors: State = {};

  if (values.name !== undefined) {
    if (!values.name) {
      errors.name = "氏名は必ず入力してください";
    } else if (!chkLength(values.name, 20)) {
      errors.name = "氏名は20文字以下で入力してください";
    }
  }

  if (values.kana !== undefined) {
    if (!values.kana) {
      errors.kana = "フリガナは必ず入力してください";
    } else if (!chkLength(values.kana, 40)) {
      errors.kana = "フリガナは40文字以下で入力してください";
    }
  }

  if (values.mail !== undefined) {
    if (!values.mail) {
      errors.mail = "メールアドレスは必ず入力してください";
    } else if (!chkLength(values.mail, 200)) {
      errors.mail = "メールアドレスは200文字以下で入力してください";
    } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
      errors.mail = "正しいメールアドレスを入力してください";
    }
  }

  if (values.title !== undefined) {
    if (!chkLength(values.title, 50)) {
      errors.title = "件名は50文字以下で入力してください";
    }
  }

  if (values.inquiry !== undefined) {
    if (!values.inquiry) {
      errors.inquiry = "お問い合わせ内容は必ず入力してください";
    } else if (!chkLength(values.inquiry, 400)) {
      errors.inquiry = "お問い合わせ内容は400文字以下で入力してください";
    }
  }

  if (Object.keys(errors).length !== 0) {
    errors.all = "入力内容に誤りがあります。再度ご確認ください。";
  }

  return errors;
};

// バリデーション：文字数チェック
const chkLength = (v: string, len: number) => {
  return v.length <= len;
};

export default validate;
