export const modifyUrl = ({ base, path, addQuery }) => {
  try {
    const url = new URL(base);

    // pathがあれば、baseを基準に解決してパスを上書き
    if (path) {
      url.pathname = new URL(path, base).pathname;
    }

    // addQuery配列があれば、各要素をクエリパラメータとして追加
    addQuery?.forEach(([key, value]) => url.searchParams.append(key, value));

    return url.toString();
  } catch (e) {
    // URLの形式が不正な場合はエラーをスロー
    throw new Error('Invalid URL format');
  }
};