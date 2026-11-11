// Rena funktioner för kassan. Inga sidoeffekter här.

// findProduct(products, id) -> produkten
export const findProduct = (products, id) =>
  products.find((product) => product.id === id);

// lineTotal(line, products) -> pris × antal
export const lineTotal = (line, products) =>
  findProduct(products, line.productId).price * line.quantity;

// subtotal(lines, products) -> summan av alla rader (reduce)
export const subtotal = (lines, products) =>
  lines.reduce((sum, line) => sum + lineTotal(line, products), 0);

// applyDiscount(amount, code, codes) -> beloppet efter rabatt
export const applyDiscount = (amount, code, codes) => {
  const rate = codes[code] ?? 0;
  return amount * (1 - rate);
};

// vatOf(amount, rate) -> momsen i ett belopp som redan innehåller moms
export const vatOf = (amount, rate) => amount - amount / (1 + rate);

// Hjälpfunktion för en rad på kvittot
const formatLine = (line, products) => {
  const { name } = findProduct(products, line.productId);
  return `${name} x${line.quantity} ${lineTotal(line, products)} kr`;
};

// formatReceipt(...) -> kvittot som en sträng
export const formatReceipt = (lines, products, code, codes, vatRate) => {
  const sum = subtotal(lines, products);
  const toPay = applyDiscount(sum, code, codes);
  const rows = lines.map((line) => formatLine(line, products));

  return [
    ...rows,
    `Summa: ${sum} kr`,
    `Med ${code}-rabatt: ${toPay.toFixed(2)} kr`,
    `Att betala: ${toPay.toFixed(2)} kr varav moms ${vatOf(toPay, vatRate).toFixed(2)} kr`,
  ].join("\n");
};
