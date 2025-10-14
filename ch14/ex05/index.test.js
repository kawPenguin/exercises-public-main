import { template } from "./index.js";

describe("template関数", () => {
  it("空のテンプレートは空文字列を返す", () => {
    expect(template``).toBe("");
  });

  it("補間なしのテキストはそのまま返す", () => {
    expect(template`test`).toBe("test");
  });

  it("補間値を型名に置き換える", () => {
    expect(template`Hello, ${"A"}`).toBe("Hello, string");
    expect(template`${1} ${null} ${() => {}}`).toBe("number object function");
    expect(template`type of 'A' is ${"A"}`).toBe("type of 'A' is string");
  });
});