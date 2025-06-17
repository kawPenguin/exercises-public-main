
// 選択ソート
export function selectionSort(arr) {
    
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        // 現在位置以降で最小値のインデックスを見つける
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // 最小値を現在位置と交換
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    
    return arr;
}