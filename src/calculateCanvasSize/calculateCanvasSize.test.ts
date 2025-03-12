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
  it("Verify that the function correctly calculates the canvas size when both length and width are negative", () => {
    expect(calculateCanvasSize("-5", "-5")).toBe(25);
  });
  it("Verify that the function truncates a floating-point length by parsing only the integer part", () => {
    expect(calculateCanvasSize("10.5", "2")).toBe(20); // parseInt("10.5") → 10
  });
});
