import { fib } from "./index.ts"

describe("fib", () => {
    it("fib(5)の時", () => {
        expect(fib(5)).toBe(5);
    })

    it("fib(75)の時", () => {
        expect(fib(75)).toBe(2111485077978050);
    })
})