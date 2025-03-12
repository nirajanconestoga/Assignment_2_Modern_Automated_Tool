import calculateCanvasSize from "./calculateCanvasSize";

describe("Unit Tests - calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
});
