# ORA Coffee — ordering menu

A mobile-first ordering menu for ORA specialty coffee, Casablanca.
Customers browse the menu, pick as many products as they like, add notes
for the barista (lactose-free milk, no sugar…), review and cancel items,
then go to a payment page to see the total and confirm.

No build step. Plain HTML, CSS and JavaScript.

## Run it

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Structure

- `index.html` — the page shell (menu, order, payment and confirmation views)
- `css/styles.css` — styling (brand colours: black and `#eee7dc`)
- `js/menu.js` — the menu data. Edit names, descriptions and prices here.
- `js/app.js` — ordering logic (cart, notes, payment flow). The cart is kept in `localStorage`.

## Payment

The "Confirm & pay" step currently generates an order number and clears the cart.
Connect a real provider (CMI, Stripe…) inside `confirmPay()` in `js/app.js`.
