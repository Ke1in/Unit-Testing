export function calculateRestockQuantity(currentStock, targetStock) {
  // BUG: This calculation is wrong.
  const quantityToOrder = targetStock - currentStock;

  return Math.max(0, quantityToOrder);
}