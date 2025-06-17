import { selectionSort } from "./index.js";

describe('selectionSort', () => {
    test('通常の配列をソートする', () => {
        const input = [64, 34, 25, 12, 22, 11, 90];
        const expected = [11, 12, 22, 25, 34, 64, 90];
        expect(selectionSort([...input])).toEqual(expected);
    });

    test('既にソートされた配列', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(selectionSort([...input])).toEqual(expected);
    });

    test('逆順の配列', () => {
        const input = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];
        expect(selectionSort([...input])).toEqual(expected);
    });
});