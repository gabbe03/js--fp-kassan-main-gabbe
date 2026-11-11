// Rena funktioner för kassan. Inga sidoeffekter här.

//   findProduct(products, id)            -> produkten
const findProduct = (products, id) =>
  products.find((product) => product.id === id);

//   lineTotal(line, products)            -> pris × antal
const lineTotal = (line, products) =>
  findProduct(products, line.productId).price * line.quantity;

//   subtotal(lines, products)            -> summan av alla rader (reduce)
const subTotal = (lines, products) =>
  lines.reduce((sum, line) => sum + lineTotal(line, products), 0);

//   applyDiscount(amount, code, codes)   -> beloppet efter rabatt
const applyDiscount = (amount, code, codes) => {
  const rate = codes[code] || 0; // Om ingen kod finns, ge rate = 0
  return amount * (1 - rate);
};

//   vatOf(amount, rate)  -> momsen i ett belopp som redan innehåller moms
const vatOf = (amount, rate) => amount - amount / (1 + rate);

const formatLine = (line, products) => {
  const { name } = findProduct(products, line.productId);
  return `${name} x${line.quantity} ${lineTotal(line, products)}kr`;
};

//   formatReceipt(lines, products, code) -> kvittot som en sträng
export const formatReceipt = (lines, products, code, codes, vatRate) => {
  const total = subTotal(lines, products);
  const discountRow = `Med ${code}-rabbatt ${applyDiscount(total, code, codes)}`;
  const rows = lines.map((line) => formatLine(line, products));
  return [
    ...rows,
    discountRow,
    `Totalt: ${total}kr varav moms ${vatOf(total, vatRate).toFixed(2)}kr`,
  ].join("\n");
};
