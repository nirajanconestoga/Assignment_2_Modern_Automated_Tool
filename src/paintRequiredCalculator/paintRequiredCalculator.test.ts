import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  it("Verify that the function handles large numbers correctly", () => {
    expect(paintRequiredCalculator(1000, 50)).toBe(20);
  });
});
