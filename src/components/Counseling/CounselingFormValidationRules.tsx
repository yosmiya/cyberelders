type State = {
  course1?: string;
  course2?: string;
  course3?: string;
  course4?: string;
  job?: string;
  exp?: string;
  name?: string;
  kana?: string;
  mail?: string;
  other?: string;
  all?: string;
};

const validate = (values: State) => {
  let errors: State = {};

  if (
    values.course1 !== undefined &&
    values.course2 !== undefined &&
    values.course3 !== undefined &&
    values.course4 !== undefined
  ) {
    if (
      !values.course1 ||
      !values.course2 ||
      !values.course3 ||
      !values.course4
    ) {
      errors.course1 = "ご興味のある分野は全て入力してください";
    }
  }

  if (values.job !== undefined) {
    if (!chkLength(values.job, 100)) {
      errors.job = "現在のお仕事は100文字以下で入力してください";
    }
  }

  if (values.exp !== undefined) {
    if (!values.exp) {
      errors.exp = "プログラミングのご経験は必ず選択してください";
    }
  }

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

  if (values.other !== undefined) {
    if (!chkLength(values.other, 400)) {
      errors.other = "ご質問・ご要望は400文字以下で入力してください";
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
