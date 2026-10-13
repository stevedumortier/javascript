//--forEach--
// forEach doet iets met elk element van de lijst. Het geeft niets terug: je gebruikt het om te tonen of om op
// te tellen in een variabele daarbuiten.

//01

// const namen = [
//   "Huisblend",
//   "Ethiopia Sidmo",
//   "Columbia Huila",
//   "Espresso Forte",
// ];

// namen.forEach((a) => {
//   console.log(`${a}`);
// });

//02

// const prijzen = [24.5, 32.0, 27.5, 45.0];

// prijzen.forEach((a) => {
//   console.log(`€ ${a.toFixed(2)}`);
// });

//03

// const landen = ["Brazilië", "Kenia", "Colombia"];

// landen.forEach((land, index) => {
//   console.log(`${index}. ${land}`);
// });

//04.

// const aantallen = [3, 1, 4, 2];
// let totaal = 0;

// aantallen.forEach((a) => (totaal += a));
// console.log(` ${totaal} zakken`);

//05.

// const temperaturen = [92, 88, 95, 90, 85];

// temperaturen.forEach((a) => {
//   if (a >= 90 && a <= 96) {
//     console.log(`${a}° - goed`);
//   } else {
//     console.log(`${a}° - te koud`);
//   }
// });

//--map--
// map maakt een nieuwe lijst, even lang als de oude. Elk element wordt omgezet met de functie die je
// meegeeft. De oorspronkelijke lijst blijft ongewijzigd.

//06.
// const prijzen = [24.5, 32.0, 27.5, 45.0];

// const prijzenPerKilo = prijzen.map((a) => a * 2);
// console.log(prijzenPerKilo);

//07.

// const namen = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Huila",
//   "Espresso Forte",
// ];

// const namenCapital = namen.map((a) => a.toUpperCase());

// console.log(namenCapital);

//08.

// const prijzen = [24.5, 32.0, 27.5, 45.0];

// const tekst = prijzen.map((a) => `€ ${a.toFixed(2)}`);

// console.log(tekst);

//09.

// const namen = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Huila",
//   "Espresso Forte",
// ];

// const tekens = namen.map((a) => a.length);

// console.log(tekens);

//10.

// const prijzen = [24.5, 32.0, 27.5, 45.0];

// const korting = prijzen.map((a) => `${(a * 0.9).toFixed(2)}`);
// console.log(korting);
// console.log(prijzen);

//--filter--
// filter maakt een nieuwe lijst met alleen de elementen waarvoor de functie true teruggeeft. De nieuwe lijst
// kan korter zijn, of zelfs leeg.

//11.

// const prijzen = [24.5, 32.0, 27.5, 45.0, 19.9, 38.0];

// const prijzen2 = prijzen.filter((a) => a > 30);

// console.log(prijzen2);

//12.

// const namen = [
//   "Huisblend",
//   "Espresso Forte",
//   "Ethiopia Sidamo",
//   "Espresso Dolce",
//   "Colombia Huila",
// ];

// const espresso = namen.filter((a) => a.includes("Espresso"));

// console.log(espresso);

//13.
//
// const scores = [8, 3, 10, 6, 9, 4, 7];

// const goed = scores.filter((a) => a >= 7);

// console.log(goed);
// console.log(`${goed.length} goede beoordelingen`);

//14.

// const landen = [
//   "Kenia",
//   "Brazilië",
//   "Colombia",
//   "Ethiopië",
//   "Guatemala",
//   "Indonesië",
// ];

// const lang = landen.filter((a) => a.length > 8);

// console.log(lang);

//15.

// const voorraad = [12, 0, 5, 0, 8, 0];

// const uitverkocht = voorraad.filter((a) => a === 0);

// console.log(`${uitverkocht.length} soorten zijn uitverkocht`);

//--find--
//find geeft het eerste element terug waarvoor de functie true teruggeeft. Het geeft geen lijst terug, maar
// één waarde. Vindt het niets, dan krijg je undefined.

//16.

// const prijzen = [24.5, 32.0, 27.5, 45.0];

// console.log(`${prijzen.find((a) => a > 30)}`);

//17.

// const namen = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Huila",
//   "Costa RicaTarrazú",
// ];

// console.log(`${namen.find((a) => a.startsWith("C"))}`);

//18.

// const prijzen = [24.5, 32.0, 27.5, 45.0];

// console.log(`${prijzen.find((a) => a > 100)}`);

// if (prijzen.find((a) => a > 100) == undefined) {
//   console.log(`Geen koffie boven 100 euro`);
// }

//19.

// const scores = [8, 3, 10, 6, 9];

// console.log(scores.find((a) => a > 7));
// console.log(scores.filter((a) => a > 7));
//find toont het eerste getal dat boven de 7 is en filter toont alle getallen boven 7

//20.

// const bestellingen = [1041, 1042, 1043, 1044];

// console.log(`Bestelling ${bestellingen.find((a) => a == 1043)} gevonden`);

// if (bestellingen.find((a) => a == 1050) == undefined) {
//   console.log(`Bestelling niet gevonden`);
// }

//--sort--
// sort zet de lijst op volgorde. Let op: sort wijzigt de lijst zelf. Maak daarom eerst een kopie met [...lijst].
// Zonder functie sorteert sort alles als tekst.

//21.

// const landen = ["Kenia", "Brazilië", "Colombia", "Ethiopië"];
// console.log([...landen].sort());
// console.log(landen);

//22.

// const getallen = [10, 9, 100, 2];

// console.log([...getallen].sort());
// console.log([...getallen].sort((a, b) => a - b));

//getallen sorteren moet met (a, b) => a - b

//23.

// const prijzen = [24.5, 32.0, 27.5, 45.0];

// console.log([...prijzen].sort((a, b) => b - a));

//24.

// const namen = ["Espresso Forte", "Kenia", "Huisblend", "Colombia Huila"];

// console.log([...namen].sort((a, b) => a.length - b.length));

//25.

// const landen = ["Kenia", "Brazilië", "Colombia", "Ethiopië"];

// console.log([...landen].sort().reverse());

//--reduce--
// reduce brengt een hele lijst terug tot één waarde, bijvoorbeeld een som. Vergeet de beginwaarde niet: , 0
// achteraan.

//26.

// const prijzen = [24.5, 32.0, 27.5, 45.0];
// const som = prijzen.reduce((totaal, prijs) => totaal + prijs, 0);
// console.log(som);

//27.

// const aantallen = [3, 1, 4, 2];

// const som = aantallen.reduce((totaal, nr) => totaal + nr, 0);

// console.log(`Totaal: ${som} zakken`);

//28.

// const scores = [8, 3, 10, 6, 9];

// const som = scores.reduce((totaal, nr) => totaal + nr, 0);

// const gemiddelde = som / scores.length;

// console.log(gemiddelde);

//29.

// const prijzen = [24.5, 32.0, 27.5, 45.0, 38.0];

// const hoogste = prijzen.reduce((hoogste, prijs) =>
//   prijs > hoogste ? prijs : hoogste,
// );
// console.log(hoogste);

// 30.

// const leeg = [];

// const totaal = leeg.reduce((totaal, nr) => totaal + nr, 0);
// console.log(totaal);
// zonder de ,0 als beginwaarde heeft hij niks om het nieuwe nr mee op te tellen

//--Extra--
// map, filter en sort geven een nieuwe lijst terug. Daarom kun je ze na elkaar zetten.

//31.

// const prijzen = [24.5, 32.0, 27.5, 45.0, 19.9, 38.0];

// const nieuw = prijzen
//   .filter((a) => a > 25)
//   .sort((a, b) => b - a)
//   .map((a) => `€ ${a.toFixed(2)}`);

// console.log(nieuw);

//32.

// const prijzen = [24.5, 32.0, 27.5, 45.0, 19.9, 38.0];

// const som = prijzen.filter((a) => a > 30).reduce((a, b) => a + b, 0);

// console.log(som);

//--Uitbreidingsoefeningen--

//01

const leerlingen = [
  { naam: "Amira", punten: [14, 16, 12, 18] },
  { naam: "Bram", punten: [8, 11, 9, 12] },
  { naam: "Chloé", punten: [17, 19, 18, 16] },
  { naam: "Dries", punten: [10, 7, 13, 6] },
  { naam: "Elif", punten: [12, 14, 15, 11] },
]; //

// Loop over elke leerling
leerlingen.forEach((leerling) => {
  // OPDRACHT 1: Bereken het gemiddelde
  // Tel eerst alle punten uit leerling.punten op met reduce
  let totaal = leerling.punten.reduce((acc, huidigPunt) => acc + huidigPunt, 0);

  // Bereken daarna het gemiddelde door te delen door het aantal punten
  let gemiddelde = totaal / leerling.punten.length;

  // Hint: Om af te ronden op 1 cijfer na de komma kun je .toFixed(1) gebruiken[cite: 1]

  // OPDRACHT 2: Tel het aantal tekorten
  // Maak hierna een nieuwe variabele en gebruik leerling.punten.filter(...) om punten < 10 te vinden[cite: 1]
});
