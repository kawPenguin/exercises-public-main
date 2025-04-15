import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  const x = -0;
  const y = 0;

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});
