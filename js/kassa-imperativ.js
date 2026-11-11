// Så här ser kassan ut i dag. Den fungerar, men gör inte om den i onödan.
// Läs den och hitta allt som inte är rent.
import { products, lines, discountCodes, VAT_RATE } from './data.js';

let total = 0;
let receiptText = '';

export function checkout(code) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let product;
    for (let j = 0; j < products.length; j++) {
      if (products[j].id === line.productId) {
        product = products[j];
      }
    }
    if (discountCodes[code]) {
      product.price = product.price * (1 - discountCodes[code]);
    }
    line.sum = product.price * line.quantity;
    total = total + line.sum;
    receiptText = receiptText + product.name + ' x' + line.quantity + '  ' + line.sum + ' kr\n';
  }
  const vat = total - total / (1 + VAT_RATE);
  receiptText = receiptText + 'Totalt: ' + total + ' kr (varav moms ' + vat.toFixed(2) + ' kr)';
  console.log(receiptText);
  return total;
}
