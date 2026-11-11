// Kaféets sortiment. Priserna är i kronor, inklusive moms.
export const products = [
  { id: 'kaffe', name: 'Kaffe', price: 39, category: 'dryck' },
  { id: 'latte', name: 'Latte', price: 49, category: 'dryck' },
  { id: 'te', name: 'Te', price: 29, category: 'dryck' },
  { id: 'bulle', name: 'Kanelbulle', price: 35, category: 'bröd' },
  { id: 'macka', name: 'Ostmacka', price: 59, category: 'mat' },
];

// Det kunden har handlat: vilken produkt och hur många
export const lines = [
  { productId: 'latte', quantity: 2 },
  { productId: 'bulle', quantity: 3 },
  { productId: 'macka', quantity: 1 },
];

export const discountCodes = {
  STUDENT: 0.1,
  PERSONAL: 0.2,
};

export const VAT_RATE = 0.12;
