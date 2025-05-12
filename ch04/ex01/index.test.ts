import { add, complex_num, div, mul, sub } from "./index.ts"

describe("複素数の四則演算", () => {

    const test_num_a : complex_num = {real_num:1, imaginary_num:4};
    const test_num_b : complex_num = {real_num:3, imaginary_num:-2};
    const test_num_c : complex_num = {real_num:-2, imaginary_num:3};
    const test_num_d : complex_num = {real_num:-4, imaginary_num:-1};
    const zero : complex_num = {real_num:0, imaginary_num:0};
    const one : complex_num = {real_num:1, imaginary_num:0};
    
    
    /**
     * 浮動小数点の計算誤差を考慮して、比較を行う。
     * @param a 比較対象の複素数1つ目
     * @param b 比較対象の複素数2つ目
     * @returns 
     */
    function complexEqual(a: complex_num, b: complex_num): boolean {
        const epsilon = 1e-8;

        return (
            Math.abs(a.real_num - b.real_num) < epsilon &&
            Math.abs(a.imaginary_num - b.imaginary_num) < epsilon
        );
    }

    describe("add", ()=> {
        it('test_num_a + test_num_b', () => {
        expect(add(test_num_a, test_num_b)).toEqual({ real_num: 4, imaginary_num: 2 });
        });

        it('test_num_c + test_num_d', () => {
        expect(add(test_num_c, test_num_d)).toEqual({ real_num: -6, imaginary_num: 2 });
        });

        it('test_num_a + zero', () => {
        expect(add(test_num_a, zero)).toEqual(test_num_a);
        });
    })

    describe('減算 sub()', () => {
        it('test_num_a - test_num_b', () => {
        expect(sub(test_num_a, test_num_b)).toEqual({ real_num: -2, imaginary_num: 6 });
        });
        
        it('test_num_d - test_num_c', () => {
        expect(sub(test_num_d, test_num_c)).toEqual({ real_num: -2, imaginary_num: -4 });
        });

        it('test_num_b - zero', () => {
        expect(sub(test_num_b, zero)).toEqual(test_num_b);
        });
    });

    describe('乗算 mul()', () => {
        it('test_num_a * test_num_b', () => {
        const result = mul(test_num_a, test_num_b);
        const expected = { real_num: 11, imaginary_num: 10 };
        expect(complexEqual(result, expected)).toBe(true);
        });

        it('test_num_c * test_num_d', () => {
        const result = mul(test_num_c, test_num_d);
        const expected = { real_num:11, imaginary_num: -10 };
        expect(complexEqual(result, expected)).toBe(true);
        });

        it('test_num_a * zero = zero', () => {
        expect(mul(test_num_a, zero)).toEqual(zero);
        });
    });

    describe('除算 div()', () => {
        it('test_num_a / test_num_b', () => {
        const result = div(test_num_a, test_num_b);
        const expected = { real_num: -5/13, imaginary_num:14/13 };
        expect(result).not.toBeNull();
        expect(complexEqual(result!, expected)).toBe(true);
        });

        it('test_num_c / test_num_d', () => {
        const result = div(test_num_c, test_num_d);
        const expected = { real_num: 5/17, imaginary_num: -14/17 };
        expect(result).not.toBeNull();
        expect(complexEqual(result!, expected)).toBe(true);
        });

        it('除算 / zero = null', () => {
        expect(div(test_num_a, zero)).toBeNull();
        });

        it('除算 / one = result', () => {
        const result = div(test_num_a, one);
        expect(result).not.toBeNull();
        expect(complexEqual(result!, test_num_a)).toBe(true);
        });
    });
})