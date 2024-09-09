const products = [
  { name: "Shgampoo", price: 260 },
  { name: "HTC", price: 20000 },
  { name: "T-Shirt", price: 160 },
  { name: "Pant", price: 1200 },
  { name: "Watch", price: 1100 },
];

function getTotal(products) {
  let totalCost = 0;
  for (let product of products) {
    totalCost += product.price;
  }
  console.log("Total Cost is=", totalCost);
}
getTotal(products);
