/**
 * 設問 5.5
 * 
 * 値が数値のプロパティを持つオブジェクトを引数に取り、
 * 偶数の値を持つプロパティだけを残した新しいオブジェクトを返す関数を作成しなさい。
 * 
 * ```js
 * const o = { x: 1, y: 2, z: 3 };
 * console.log(f(o)); // { y: 2 }
 * console.log(o); // { x: 1, y: 2, z: 3 } 元のオブジェクトは変更しない
 * ```
 */

export function filterEvenProperties(obj: { [key: string]: number }): { [key: string]: number  | undefined} {
    const newObj: { [key: string]: number } = {};
    for (const key in obj) {
        if(obj[key] % 2 === 0){
            newObj[key] = obj[key];
        }
    }

    return newObj;
}