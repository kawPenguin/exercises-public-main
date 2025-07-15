// 1. any関数の実装
export function any(...functions) {
  return function(value) {
    return functions.some(fn => fn(value));
  };
}

// 2. catching関数の実装
export function catching(mainFunction, errorHandler) {
  return function(...args) {
    try {
      return mainFunction(...args);
    } catch (error) {
      return errorHandler(error);
    }
  };
}