import { add, sub } from ".";

describe("四則演算", () => {
  describe("add", () => {
    test("戻り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });
  });

  describe("sub", () => {
    test("戻り値は、第一引数と第二引数の「左」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("合計の上限は、'100'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
});
