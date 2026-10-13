//scoped

const winkelnaam = "Roast & Co.";

function toonBon(prijs) {
  const btw = prijs * 0.06;
  console.log(`${winkelnaam}: btw ${btw}`);
}

toonBon(100);

//------------------//

const BTW_TARIEF = 0.06;

function bonRegel(naam, prijs, aantal) {
  const excl = prijs * aantal;
  const incl = excl + excl * BTW_TARIEF;
  return `${naam}: € ${incl.toFixed(2)}`;
}

console.log(bonRegel("chips", 3, 10));
