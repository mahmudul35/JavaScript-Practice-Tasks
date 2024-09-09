const mobiles = [
  { name: "Samsung", price: 26000, camera: "12MP", color: "Black" },
  { name: "HTC", price: 20000, camera: "12MP", color: "Red" },
  { name: "Realme", price: 16000, camera: "12MP", color: "Yellow" },
  { name: "Oppo", price: 12000, camera: "12MP", color: "SkyBlue" },
  { name: "Infinix", price: 11000, camera: "12MP", color: "SkyBlue" },
];

function cheapest(obj) {
  let min = obj[0];
  for (let i of obj) {
    if (i.price < min.price) {
      min = i;
    }
  }
  console.log(min);
}
cheapest(mobiles);
