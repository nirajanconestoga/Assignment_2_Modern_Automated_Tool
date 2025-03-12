import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  it("Verify that the function handles large numbers correctly", () => {
    expect(paintRequiredCalculator(1000, 50)).toBe(20);
  });
  it("Verify that the function handles decimal coverage correctly", () => {
    expect(paintRequiredCalculator(50, 7.5)).toBeCloseTo(6.67, 2); // Floating-point rounding
  });
  it("Verify that the function returns 0 when the area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });
});
