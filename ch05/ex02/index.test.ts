import { escapeCharactersIfElse, escapeCharactersSwitch } from "./index.ts";

describe("escapeCharactersIfElse", () => {
    it("NUL文字", () => {
        expect(escapeCharactersIfElse("\0")).toBe("\\0");
    });

    it("バックスペース", () => {
        expect(escapeCharactersIfElse("\b")).toBe("\\b");
    });

    it("水平タブ", () => {
        expect(escapeCharactersIfElse("\t")).toBe("\\t");
    });

    it("改行", () => {
        expect(escapeCharactersIfElse("\n")).toBe("\\n");
    });

    it("垂直タブ", () => {
        expect(escapeCharactersIfElse("\v")).toBe("\\v");
    });

    it("改ページ", () => {
        expect(escapeCharactersIfElse("\f")).toBe("\\f");
    });

    it("復帰", () => {
        expect(escapeCharactersIfElse("\r")).toBe("\\r");
    });

    it("二重引用符", () => {
        expect(escapeCharactersIfElse("\"")).toBe("\\\"");
    });

    it("単一引用符", () => {
        expect(escapeCharactersIfElse("\'")).toBe("\\\'");
    });

    it("バックスラッシュ", () => {
        expect(escapeCharactersIfElse("\\")).toBe("\\\\");
    });

});

describe("escapeCharactersSwitch", () => {
    it("NUL文字", () => {
        expect(escapeCharactersSwitch("\0")).toBe("\\0");
    });

    it("バックスペース", () => {
        expect(escapeCharactersSwitch("\b")).toBe("\\b");
    });

    it("水平タブ", () => {
        expect(escapeCharactersSwitch("\t")).toBe("\\t");
    });

    it("改行", () => {
        expect(escapeCharactersSwitch("\n")).toBe("\\n");
    });

    it("垂直タブ", () => {
        expect(escapeCharactersSwitch("\v")).toBe("\\v");
    });

    it("改ページ", () => {
        expect(escapeCharactersSwitch("\f")).toBe("\\f");
    });

    it("復帰", () => {
        expect(escapeCharactersSwitch("\r")).toBe("\\r");
    });

    it("二重引用符", () => {
        expect(escapeCharactersSwitch("\"")).toBe("\\\"");
    });

    it("単一引用符", () => {
        expect(escapeCharactersSwitch("\'")).toBe("\\\'");
    });

    it("バックスラッシュ", () => {
        expect(escapeCharactersSwitch("\\")).toBe("\\\\");
    });

});