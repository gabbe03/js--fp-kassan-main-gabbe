# Kassan – funktionell stil

Uppgift till onsdagen 11 november och torsdagens workshop, där ni granskar varandras kod i par. Den hör ihop med passet om funktionell stil och code-alongen [code-along-funktionell-stil-261111](https://github.com/chasacademy-sandra-larsson/code-along-funktionell-stil-261111).

Ett kafé har en kassa i `js/kassa-imperativ.js`. Den fungerar, en gång. Kör den två gånger med samma rabattkod och jämför kvittona.

## Kom igång

Öppna mappen i VS Code och starta Live Server. Ha DevTools (F12) öppet med **Console** synlig. Stegen står också som `TODO` i `js/main.js`.

## Del A, på passet (15 min)

Skriv rena funktioner i `js/receipt.js` och använd dem i `js/main.js` i stället för `checkout`. Funktionerna står i `main.js`. Ingen av dem får ändra `products` eller `lines`, läsa globala variabler eller logga. Det enda stället med sidoeffekter är `main.js`.

## Del B, självstudier

Skriv `createCart(products)` i `js/cart.js`. Varukorgen minns sina rader i en closure och har:

- `add(productId, quantity = 1)`: lägger till en rad, eller ökar antalet om produkten redan finns. Kastar ett fel om produkten inte finns.
- `remove(productId)`: tar bort raden.
- `lines()`: returnerar en kopia av raderna.
- `total()`: summan, med hjälp av dina funktioner från del A.

Inga `push`, inga `splice`. Varje ändring skapar en ny array.

## Del C, självstudier

Visa kvittot på sidan i stället för i konsolen. Bara `main.js` får röra DOM:en, och texten räknas fram av dina rena funktioner.

## Till torsdagen

Ta med Kassan och Pokern ([js--oop-poker](https://github.com/chasacademy-sandra-larsson/js--oop-poker)). Lägg dem på GitHub, så att en kamrat kan granska dem i en pull request.
