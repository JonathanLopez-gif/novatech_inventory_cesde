export const calculateTotalPrice = (price, taxRate = 0.19) => {
  return price + (price * taxRate); // Corrección del cálculo de impuestos
};