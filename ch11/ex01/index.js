export class TypeMap {
  #map; 

  constructor() {
    this.#map = new Map();
  }

  set(key, value) {
    if (typeof key !== 'function') {
      throw new Error('キーはコンストラクタ関数である必要があります。');
    }

    // キーのインスタンスであるかを確認
    const isInstance = value instanceof key;
    // 対応するプリミティブ型であるかを確認
    const isPrimitive = value !== null && value !== undefined && value.constructor === key;

    if (isInstance || isPrimitive) {
      this.#map.set(key, value);
    } else {
      // どちらの条件も満たさない場合はエラーをスロー
      throw new Error(`valueの値が不正です。`);
    }
  }

  get(key) {
    return this.#map.get(key);
  }
}