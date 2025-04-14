describe("Check Emojo", () =>{
    it("Hundred Points Symbol Length", () => {
        const hundredPointsSymbol = "💯";
        expect(hundredPointsSymbol.length).toBe(2);
    })

    it("equal utf-16 utf-32", () => {
        expect("\uD83D\uDCAF").toBe("\u{0001F4AF}");
    })
})