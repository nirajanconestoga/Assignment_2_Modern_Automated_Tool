import calculateCanvasSize from "./calculateCanvasSize";

describe("Unit Tests - calculateCanvasSize", () => {
  it("Verify that the function correctly multiplies two valid integer strings", () => {
    expect(calculateCanvasSize("10", "100")).toBe(1000);
  });
  it("Verify that the function correctly calculates the canvas size when the length is negative", () => {
    expect(calculateCanvasSize("-5", "10")).toBe(-50);
  });
  it("Verify that the function correctly calculates the canvas size when the width is negative", () => {
    expect(calculateCanvasSize("10", "-2")).toBe(-20);
  });
});
