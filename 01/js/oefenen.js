console.log("hallo vanuit Javascript!");
console.info("Ter informatie");
console.warn("Let op: de voorraad is bijna op!");
console.error("Dit is fout gelopen!");
console.table([
  { naam: "huisblend", prijs: 24.5 },
  { naam: "Ethopia Sidamo", prijs: 32 },
]);
//dit is commentaar

/*meerdere regels commentaar
meerdere regels commentaar */
// var types: string, integer, boolean, array
const winkelnaam = "Roast & Co.";
let aantalZaken = 12;
let korting = 2;
let opVoorraad = true;

const naam = "voorbeeld naam";
const prijs = 20;
const aantal = 3;
console.log(winkelnaam);
console.log(aantalZaken);

aantalZaken = 11;
console.log(aantalZaken);

console.log(typeof aantalZaken); //number
console.log(typeof korting);

console.log(opVoorraad);
console.log(typeof opVoorraad);

console.log(naam);
console.log(prijs);
console.log("De naam is: " + naam + " en de prijs is: " + prijs);
console.log(`De naam is: ${naam} en de prijs is ${prijs * aantal}`);

const ingetypt = "12";
console.log(Number(ingetypt) + 3);
console.log(parseInt("18 stuks", 10));
console.log(parseFloat("24.50"));
console.log(Number("twaalf")); //Nan

//+,-,*,/,% (modulus/rest), ** (machtsverheffing)

let voorraad = 5;
voorraad = voorraad + 1;
voorraad += 1;

const totaal = 75.5321;
console.log(Math.round(totaal)); //76
console.log(Math.floor(totaal)); //75
console.log(Math.ceil(totaal)); //76
console.log(totaal.toFixed(2)); //75.53

console.log("12" + 3); //niet error maar 123 als string

/*
gelijk aan ==
verschillend van !=
> < >= <=
=== kijkt naar datatypes "5" == 5 True, "5" === 5 False
!==
*/

const inhuis = 3;
const branding = "medium";
console.log(inhuis > 0 && branding === "medium");

let verkocht = true;
verkocht = !verkocht;
console.log(verkocht);

const familienaam = "";

if (familienaam) {
  console.log(`Dag ${familienaam}`);
} else {
  console.log(`Geen familienaam ingevuld`);
}

// 2 variabelen vullen met integers. deze getallen zal je optellen, delen, vermenigvuldigen en aftrekken.
// resultaat: "De som van 2 getallen is:" "Het product van 2 getallen is:" "De deling van 2 getallen is:" "De aftrekking van 2 getallen is:"
// resultaat 1 + 2 + 3 + 4 = ...

const variabel1 = 66;
const variabel2 = 11;

let som = variabel1 + variabel2;
let product = variabel1 * variabel2;
let deling = variabel1 / variabel2;
let aftrekking = variabel1 - variabel2;
console.log(`De som van 2 getallen is: ${som}`);
console.log("Het product van 2 getallen is:", product);
console.log("De deling van 2 getallen is:", deling);
console.log("De aftrekking van 2 getallen is:", aftrekking);
console.log(
  "Uitkomst van: som + product + deling + aftrekking =",
  som + product + deling + aftrekking,
);
