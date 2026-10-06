// let voorraad = 5;

// while (voorraad > 0) {
//   console.log(`Nog ${voorraad} stuks`);
//   voorraad--;
// }
// console.log("Uitverkocht");

/* combo */

let stock = 5;

while (stock > 0) {
  if (stock > 2) {
    console.log(`Stock is nog ca va`);
    console.log(`------------------`);
    console.log(`Nog ${stock} stuks`);
  } else {
    console.log(`Stock is kritiek`);
    console.log(`------------------`);
    console.log(`Nog ${stock} stuks`);
  }
  stock--;
}
console.log("uitverkocht");
