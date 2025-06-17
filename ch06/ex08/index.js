// restrict: targetからtemplateに存在しない自プロパティを削除
export function restrict(target, template) {
  for (const key of Object.keys(target)) {
    if (!Object.prototype.hasOwnProperty.call(template, key)) {
      delete target[key];
    }
  }
  return target;
}

// substract: targetからsourcesの自プロパティと同名の自プロパティを削除
export function substract(target, ...sources) {
  const keysToDelete = new Set();
  for (const src of sources) {
    for (const key of Object.keys(src)) {
      keysToDelete.add(key);
    }
  }
  for (const key of keysToDelete) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      delete target[key];
    }
  }
  return target;
}

