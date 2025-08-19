export const isEmailAddress = (str) => {
  // 文字列型ではない
  if (typeof str !== 'string') {
    return false;
  }

  // @が1つ含まれているか
  const parts = str.split('@');
  if (parts.length !== 2) {
    return false;
  }

  // ローカルとドメインに分割
  const [localPart, domainPart] = parts;

  // ローカルパートとドメインパートが空でない
  if (localPart.length === 0 || domainPart.length === 0) {
    return false;
  }

  // ローカルパート
  // 長さが64文字以下
  if (localPart.length > 64) {
    return false;
  }
  // ドットが先頭や末尾になく、連続していない
  if (localPart.startsWith('.') || localPart.endsWith('.') || localPart.includes('..')) {
    return false;
  }

  // ドメインパートの検証
  // 長さが253文字以下である
  if (domainPart.length > 254) {
    return false;
  }

  // ドットが先頭や末尾になく、連続していないこと
  if (domainPart.startsWith('.') || domainPart.endsWith('.') || domainPart.includes('..')) {
    return false;
  }

  // 使用可能文字の検証
  // テストケースで許可されている文字セットを正規表現で定義
  const allowedCharsRegex = /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+$/;
  if (!allowedCharsRegex.test(localPart) || !allowedCharsRegex.test(domainPart)) {
    return false;
  }

  // 全てのチェックを通過した場合は true
  return true;
};