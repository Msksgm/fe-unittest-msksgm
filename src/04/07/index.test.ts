import { greetByTime } from ".";

describe("greetByTime(", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("指定時間待つと、経過時間をもって resolve される", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 8, 0, 0));
    expect(greetByTime()).toBe("おはよう");
  });
  test("指定時間待つと、経過時間をもって resolve される", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 14, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });
  test("指定時間待つと、経過時間をもって resolve される", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 21, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
