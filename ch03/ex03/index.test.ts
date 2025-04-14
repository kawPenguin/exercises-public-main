import { valueSame } from "./index.ts"

describe("valueSame", () => {
    it("0.3 - 0.2 === 0.1", () => {
        expect(valueSame(0.3-0.2, 0.1)).toBe(true);
    });

    it("0.2 - 0.1 === 0.1", () => {
        expect(valueSame(0.2-0.1, 0.1)).toBe(true);
    });

})