import { counterGroup } from "./index.js";

describe("counterGroup", () => {
  describe("Counter", () => {
    describe("#count", () => {
      test("It returns incremented value", () => {
        const cg = counterGroup();
        const counter = cg.newCounter();
        expect(counter.n()).toBe(0);
        expect(counter.n()).toBe(1);
        expect(counter.n()).toBe(2);
      });
    });

    describe("#reset", () => {
      test("It resets incrementedd value", () => {
        const cg = counterGroup();
        const counter = cg.newCounter();
        expect(counter.n()).toBe(0);
        counter.reset();
        expect(counter.n()).toBe(0);
      });
    });

    describe("Isolation between Counter", () => {
      test("States in counters are isolated", () => {
        const cg = counterGroup();
        const c1 = cg.newCounter();
        const c2 = cg.newCounter();

        expect(c1.n()).toBe(0);
        expect(c1.n()).toBe(1);
        expect(c1.n()).toBe(2);
        expect(c2.n()).toBe(0);
        expect(c2.n()).toBe(1);
        expect(c1.n()).toBe(3);
      });
    });
  });

  describe("#total", () => {
    test("It returns total amount of all counters in CounterGroup", () => {
      const cg = counterGroup();
      expect(cg.total()).toBe(0);
      const c1 = cg.newCounter();
      c1.n();
      c1.n();
      c1.n();
      expect(cg.total()).toBe(3);
      const c2 = cg.newCounter();
      c2.n();
      c2.n();
      expect(cg.total()).toBe(5);
      const c3 = cg.newCounter();
      c3.n();
      expect(cg.total()).toBe(6);
      c1.reset();
      expect(cg.total()).toBe(3);
    });
  });

  describe("#average", () => {
    test("It returns average amount of all counters in CounterGroup", () => {
      const cg = counterGroup();
      expect(() => cg.average()).toThrowError(TypeError);
      const c1 = cg.newCounter();
      c1.n();
      c1.n();
      c1.n();
      expect(cg.average()).toBe(3);
      const c2 = cg.newCounter();
      c2.n();
      c2.n();
      expect(cg.average()).toBe(2.5);
      const c3 = cg.newCounter();
      c3.n();
      expect(cg.average()).toBe(2);
      c1.reset();
      expect(cg.average()).toBe(1);
    });
  });

  describe("#variance", () => {
    test("It returns variance of all counters in CounterGroup", () => {
      const cg = counterGroup();
      expect(() => cg.variance()).toThrowError(TypeError);
      const c1 = cg.newCounter();
      c1.n();
      c1.n();
      c1.n();
      expect(() => cg.variance()).toThrowError(TypeError);
      const c2 = cg.newCounter();
      c2.n();
      c2.n();
      expect(cg.variance()).toBe(0.25);
      const c3 = cg.newCounter();
      c3.n();
      expect(cg.variance()).toBeLessThan(0.67); // 0.66666.....
      expect(cg.variance()).toBeGreaterThan(0.66);
      c1.reset();
      expect(cg.variance()).toBeLessThan(0.67); // 0.66666.....
      expect(cg.variance()).toBeGreaterThan(0.66);
    });
  });

  describe("Isolation between CounterGroup", () => {
    test("States in CounterGroups are isolated", () => {
      const cg1 = counterGroup();

      const c11 = cg1.newCounter();
      c11.n();
      c11.n();
      c11.n();
      const c12 = cg1.newCounter();
      c12.n();
      c12.n();

      const cg2 = counterGroup();
      const c21 = cg2.newCounter();
      c21.n();
      const c22 = cg2.newCounter();
      c22.reset();

      expect(cg1.total()).toBe(5);
      expect(cg2.total()).toBe(1);
    });
  });
});
