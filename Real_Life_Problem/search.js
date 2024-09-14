const products = [
  { id: 1, name: "I phone 13", price: 120000, year: 2023 },
  { id: 2, name: "walton laptop", price: 120000, year: 2023 },
  { id: 3, name: "walton Keyboard", price: 120000, year: 2023 },
  { id: 4, name: "Rgb keyboard", price: 120000, year: 2023 },
  { id: 5, name: "xiaomi phone", price: 120000, year: 2023 },
  { id: 6, name: "Keyboard mouse combo", price: 120000, year: 2023 },
  { id: 7, name: "I phone 14", price: 120000, year: 2023 },
  { id: 8, name: "apple watch", price: 120000, year: 2023 },
  { id: 9, name: "rolex watch", price: 120000, year: 2023 },
  { id: 10, name: "I phone", price: 120000, year: 2023 },
  { id: 11, name: "imice keyboard", price: 120000, year: 2023 },
  { id: 12, name: "infinx phone", price: 120000, year: 2023 },
];

function matchItem(products, search) {
  let matchProduct = [];
  for (const product of products) {
    // console.log(product.name.includes("phone"));
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matchProduct.push(product);
    }
  }
  return matchProduct;
}
let result = matchItem(products, "KEYBOARD");
console.log(result);
