// Del B: createCart() med closure. Se README.
//
// En closure är en funktion som minns variablerna från där den skapades.
// createCart skapar variabeln lines. Funktionerna som returneras (add, remove ...)
// kan läsa och byta ut den, men ingen utanför varukorgen kommer åt den direkt.
//
// TODO: importera din subtotal från receipt.js, du behöver den i total().

export const createCart = (products) => {
  // Varukorgens minne. let, eftersom du byter ut arrayen vid varje ändring.
  // Raderna ser ut som i data.js: { productId: 'latte', quantity: 2 }
  let lines = [];

  const add = (productId, quantity = 1) => {
    // TODO 1: Finns produkten? Annars: throw new Error(`Okänd produkt: ${productId}`)
    //         Tips: products.some(...) eller din findProduct från del A.

    // TODO 2: Finns produkten redan i lines?
    //   - Ja:  map över lines och returnera en ny rad med större quantity för just den
    //          produkten. Ändra inte den gamla raden, skapa en ny: { ...line, quantity: ... }
    //   - Nej: en ny array med alla gamla rader plus den nya: [...lines, { productId, quantity }]
    // Tilldela resultatet till lines. Inga push.
  };

  const remove = (productId) => {
    // TODO 3: en ny array utan raden för productId. Vilken arraymetod väljer bort saker?
    //         Inga splice.
  };

  return {
    add,
    remove,
    // TODO 4: lines() ska returnera en kopia, så att ingen utanför kan ändra i varukorgen.
    // TODO 5: total() räknar summan med din subtotal från del A.
  };
};

// Testa i main.js, till exempel:
//
//   import { products } from './data.js';
//   import { createCart } from './cart.js';
//
//   const cart = createCart(products);
//   cart.add('latte', 2);
//   cart.add('bulle');
//   cart.add('latte');            // nu 3 latte, fortfarande en rad
//   console.log(cart.lines());
//   console.log(cart.total());    // 3 × 49 + 35 = 182
//
//   cart.lines().push({ productId: 'kaffe', quantity: 99 });
//   console.log(cart.lines());    // kaffet ska inte synas här. Varför inte?
//
//   cart.add('glass');            // ska kasta ett fel
