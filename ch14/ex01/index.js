/**
 * 設問 14-1
 * 与えられたテストを通過するように、プロパティ、属性を設定したオブジェクトを返す関数を作成しなさい。
 */


// 書き込み・再定義不可
export function unwritableAndUnconfigurableObj(){
    return Object.freeze({a:1});
}

// 書き込み可・再定義不可
export function writableAndUnconfigurableObj(){
    return Object.seal({b:2});
}

// ネストされて再書き込み不可
export function nestedUnwritableObj() {
    const obj = { c: { d: { e: 3 } } };
    
    // freezeは浅い操作のため、再起的に呼び出す
    function deepFreeze(o) {
        Object.freeze(o);
        for (const key in o) {
            if (o[key] !== null && typeof o[key] === 'object') {
                deepFreeze(o[key]);
            }
        }
        return o;
    }
    
    return deepFreeze(obj);
}