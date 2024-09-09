const products = [
  { name: "Shgampoo", price: 26, quantity: 2 },
  { name: "HTC", price: 2000, quantity: 3 },
  { name: "T-Shirt", price: 160, quantity: 1 },
  { name: "Pant", price: 1200, quantity: 4 },
  { name: "Watch", price: 1100, quantity: 6 },
];

function getTotalCost(products) {
  let totalCost = 0;
  for (const product of products) {
    // let totalProductCost = product.price * product.quantity;
    totalCost += product.price * product.quantity;
  }
  return totalCost;
}
let result = getTotalCost(products);
console.log(result);
