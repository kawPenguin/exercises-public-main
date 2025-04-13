import { Point } from "./index.ts"

describe("Point Class", ()=> {
    describe("distance", ()=>{
        it("x:1, y:1を与えたとき", () =>{
            const point = new Point(1,1);
            expect(point.distance()).toBe(1.4142135623730951);
        })

        it("x, yともに0を与えたとき", () => {
            const point = new Point(0, 0);
            expect(point.distance()).toBe(0);
        })
    })

    describe("add", () => {
        it("Pointに対して正の数を足したとき", () => {
            const point1 = new Point(1,1);
            const point2 = new Point(1,1);

            const result = point1.add(point2);
            expect(result).toEqual({"x": 2, "y": 2});

        })

        it("Pointに対して負の数を足したとき", () => {
            const point1 = new Point(1,1);
            const point2 = new Point(-2,-2);

            const result = point1.add(point2);

            expect(result).toEqual({"x": -1, "y": -1});
        })
    })


})