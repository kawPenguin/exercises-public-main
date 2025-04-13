import { abs, sum, factorial } from "./index.ts";


describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("正の数を与えたとき", () => {
      expect(sum([1,3,5,7])).toBe(16);
    });

    it("負の数を与えたとき", () => {
      expect(sum([-1,-3,-5,-7])).toBe(-16);
    });

    it("正と負の数を与えたとき", () => {
      expect(sum([1,3,5,-1])).toBe(8);
    });

    it("0を与えたとき", () => {
      expect(sum([0])).toBe(0);
    });
  });

  describe("factorial", ()=>{
    it("正の値を与えたとき", () =>{
      expect(factorial(4)).toBe(24);
    });

    it("0を与えたとき", ()=> {
      expect(factorial(0)).toBe(1);
    })
  
  })
});
