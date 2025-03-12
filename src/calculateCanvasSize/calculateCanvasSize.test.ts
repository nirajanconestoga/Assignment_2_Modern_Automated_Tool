import calculateCanvasSize from "./calculateCanvasSize";

describe("Unit Tests - calculateCanvasSize", () => {
  it("Verify that the function correctly multiplies two valid integer strings", () => {
    expect(calculateCanvasSize("10", "100")).toBe(1000);
  });
});
