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
    expect(calculateCanvasSize("10.5", "2")).toBe(20);
  });
  it("Verify that the function truncates a floating-point width by parsing only the integer part", () => {
    expect(calculateCanvasSize("10", "2.5")).toBe(20);
  });
  it("Verify that the function truncates both floating-point length and width by parsing only the integer parts", () => {
    expect(calculateCanvasSize("2.9", "3.1")).toBe(6);
  });
  it("Verify that the function returns 0 when the length is '0'", () => {
    expect(calculateCanvasSize("0", "100")).toBe(0);
  });
  it("Verify that the function returns 0 when the width is '0'", () => {
    expect(calculateCanvasSize("100", "0")).toBe(0);
  });
  it("Verify that the function returns 0 when both length and width are '0'", () => {
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });
  it("Verify that the function returns NaN when the length is an empty string", () => {
    expect(calculateCanvasSize("", "100")).toBeNaN();
  });
  it("Verify that the function returns NaN when the width is an empty string", () => {
    expect(calculateCanvasSize("100", "")).toBeNaN();
  });
  it("Verify that the function returns NaN when both length and width are empty strings", () => {
    expect(calculateCanvasSize("", "")).toBeNaN();
  });
  it("Verify that the function returns NaN when the length is a non-numeric string", () => {
    expect(calculateCanvasSize("abc", "100")).toBeNaN();
  });
});
