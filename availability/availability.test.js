import { canFulfillOrder } from "./availability.js";

describe("canFulfillOrder", () => {
  
  test("returns true when stock is sufficient for the order", () => {
    expect(canFulfillOrder(5, 3)).toBe(true);
  });
  test("returns false when stock has less than the order quantity", () => {
    expect(canFulfillOrder(1, 2)).toBe(false);
  });
  test("returns true when stock matches the order quantity", () => {
    expect(canFulfillOrder(5, 5)).toBe(true);
  });
  test("returns true when the order quantity is zero", () => {
    expect(canFulfillOrder(3, 0)).toBe(true);
  });
});
