import { pow } from "./index.ts";

describe('pow', () => {
    describe('基本的な累乗計算', () => {
        test('pow(2, 3)', () => {
            expect(pow(2, 3)).toBe(8);
        });

        test('pow(5, 2)', () => {
            expect(pow(5, 2)).toBe(25);
        });
    });

    describe('偶数の指数での動作確認', () => {
        test('pow(2, 8)', () => {
            expect(pow(2, 8)).toBe(256);
        });

        test('pow(3, 6)', () => {
            expect(pow(3, 6)).toBe(729);
        });
    });

    describe('奇数の指数での動作確認', () => {
        test('pow(2, 5)', () => {
            expect(pow(2, 5)).toBe(32);
        });

        test('pow(3, 7)', () => {
            expect(pow(3, 7)).toBe(2187);
        });

    });
});