import { greetByTime } from "./greetByTime";

describe("greetByTime(", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("朝は「おはよう」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 24, 8, 0, 0, 0));
    expect(greetByTime()).toBe("おはよう");
  });
  test("昼は「こんにちは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 24, 14, 0, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });
  xtest("夜は「こんばんは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 24, 21, 0, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
