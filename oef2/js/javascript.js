//1.
const name = "Steve";
let age = 23;
const isStudent = true;

console.log(`Ik ben ${name}, ik ben ${age} jaar en student ${isStudent}`);

//2.
const product = "Laptop";
const prijs = 899;
let voorraad = 10;

voorraad = voorraad - 2;
console.log(`Nieuwe voorraad: ${voorraad}`);

//3.

const product2 = "Toetsenbord"; //verwacht type String
const prijs2 = 79.95; //verwacht type Float
const beschikbaar = true; //verwacht type boolean
let kortingscode; //verwacht type String
const korting = null; //verwacht type integer

console.log(typeof product2); //string
console.log(typeof prijs2); //number
console.log(typeof beschikbaar); //boolean
console.log(typeof kortingscode); //undefined
console.log(typeof korting); //object

//4.
const aantal = "12";
const extra = 3;

console.log(parseInt(aantal) + extra);

//5.
const prijs3 = 24.95;
const aantal2 = 4;
let totaal = prijs3 * aantal2;
const formatter = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
});

console.log(`${aantal2} T-shirts kosten ${formatter.format(totaal)} `);

//6.
const Celsius = 22;
const Fahrenheit = (Celsius * 9) / 5 + 32;

console.log(`${Celsius} °C is ${Fahrenheit} °F`);

//7.
const minuten = 137;
const volledigeUren = Math.floor(137 / 60);
const resterendeMinuten = 137 % 60;

console.log(
  `De film duurt ${volledigeUren} uur en ${resterendeMinuten} minuten.`,
);

//8.
let voorraad2 = 20;
voorraad2 += 5;
voorraad2 -= 3;
voorraad2 *= 2;
voorraad2++;

console.log(voorraad2);

//9.

const gemiddelde = 7.638;
console.log(Math.round(gemiddelde));
console.log(Math.floor(gemiddelde));
console.log(Math.ceil(gemiddelde));
console.log(gemiddelde.toFixed(2));

//10.

const leeftijd = 18;
const minimumLeeftijd = 18;
let oudGenoeg = leeftijd >= minimumLeeftijd;
let exactMinimum = leeftijd === minimumLeeftijd;
let jongerDanMinimum = leeftijd < minimumLeeftijd;
console.log(`${oudGenoeg}`);
console.log(`${exactMinimum}`);
console.log(`${jongerDanMinimum}`);

//11.

const getal = 5;
const tekst = "5";

console.log(getal === tekst); // ik denk false
console.log(getal !== tekst); // ik denk true
//eerste kijkt als alles gelijk is inclusief het type, tweede kijkt als er iets niet gelijk is zoals het type

//12.
const dag = "zaterdag";
if (dag == "zaterdag" || dag == "zondag") {
  isWeekend = true;
} else {
  isWeekend = false;
}
console.log(isWeekend);

//13.
const leeftijd2 = 21;
const heeftTicket = true;
let magBinnen = false;
if (leeftijd2 >= 18 && heeftTicket == true) {
  magBinnen = true;
}
console.log(magBinnen);

//14.

const voorraad3 = 4;
let isUitverkocht = false;
let beschikbaar2 = true;
if (voorraad3 == 0) {
  isUitverkocht = true;
  beschikbaar2 = false;
  console.log(isUitverkocht, beschikbaar2);
}
if (voorraad3 != 0) {
  isUitverkocht = false;
  beschikbaar2 = true;
  console.log(isUitverkocht, beschikbaar2);
}

//15.
const naam = "Steve";

if (naam) {
  console.log(`Dag ${naam}`);
} else {
  console.log(`Geen naam ingevuld`);
}

//16.
const totaal2 = 125;

if (totaal2 >= 100) {
  console.log(`Korting van toepassing`);
} else {
  console.log(`Geen korting`);
}

//17.
const invoer = "12 stuks";

console.log(parseInt(invoer) + 5);

//18.

const invoer2 = "24.50 euro";

console.log(parseFloat(invoer2) * 3);

//19.
const getal2 = 17;

if (getal2 % 2 == 0) {
  console.log(`Even`);
} else {
  console.log(`Oneven`);
}

//20.
const koffiePrijs = 3.2;
const croissantPrijs = 2.8;
let minstens10 = false;
const totaal3 = 2 * koffiePrijs + 3 * croissantPrijs;

if (totaal3 >= 10) {
  minstens10 = true;
}
console.log(`Totaal: ${totaal3.toFixed(2)}. Minstens 10 euro: ${minstens10}`);
