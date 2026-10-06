//gebruik for loops om de omeven getallen te tonen tot 20
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i -= 3) {
//   console.log(i);
// }

// let counter = 10;
// while (counter > 0) {
//   console.log(counter);
//   counter -= 3;
// }

// 1.
// const voorraad = 7;

// if (voorraad > 0) {
//   console.log(`Product beschikbaar`);
// } else {
//   console.log(`Uitverkocht`);
// }

//2.

// const bestelnummer = 37;
// if (bestelnummer % 2 == 0) {
//   console.log(`Bestelling ${bestelnummer} gaat naar tafel A`);
// } else {
//   console.log(`Bestelling ${bestelnummer} gaat naar tafel B`);
// }

//3.

// const bedrag = 42.5;
// let verzendkosten;

// if (bedrag >= 50) {
//   verzendkosten = 0;
// } else {
//   verzendkosten = 4.95;
// }

// console.log(
//   `Bedrag: ${bedrag} Verzendkosten: ${verzendkosten} Totaal: ${bedrag + verzendkosten}`,
// );

//4.

// const leeftijd = 16;
// if (leeftijd >= 18) {
//   console.log(`Welkom bij de workshop!`);
// } else {
//   console.log(`Sorry, je moet nog ${18 - leeftijd} jaar wachten.`);
// }

//5.

// const ingegeven = "25";
// const code = 25;
// console.log(Number(ingegeven) == code);
// console.log(Number(ingegeven) === code);

// if (Number(ingegeven) === code) {
//   console.log(`Code correct`);
// } else {
//   console.log(`Code fout`);
// }

//6.

// const gebruikersnaam = "barista";
// const wachtwoord = "bonen123";

// if (gebruikersnaam == "barista" && wachtwoord == "bonen123") {
//   console.log("Welkom, kassa geopend");
// } else {
//   console.log("Foute gebruikersnaam of wachtwoord");
// }

//7.

//Test met de waarden 25, 12, 3, 0 en -2
// const voorraad = -2;

// if (voorraad > 20) {
//   console.log(`Ruim voorradig`);
// } else if (voorraad >= 6) {
//   console.log(`Voldoende voorraad`);
// } else if (voorraad >= 1) {
//   console.log(`Bijna op - bijbestellen!`);
// } else if (voorraad == 0) {
//   console.log(`Uitverkocht`);
// } else {
//   console.log(`Fout: voorraad kan niet negatief zijn`);
// }

//8.

// const score = 15;
// const maximum = 20;
// const percentage = (score / maximum) * 100;
// if (percentage >= 85) {
//   console.log(`Uitstekend`);
// } else if (percentage >= 70) {
//   console.log(`Goed`);
// } else if (percentage >= 50) {
//   console.log(`Geslaagd`);
// } else {
//   console.log(`Niet geslaagd`);
// }

//9.

// const temperatuur = 98;

// if (temperatuur < 88) {
//   console.log(`Te koud – de koffie wordt zuur`);
// } else if (temperatuur <= 96) {
//   console.log(`Ideale temperatuur`);
// } else {
//   console.log(`Te heet – de koffie wordt bitter`);
// }

//10.

// const aantal = 12;
// const prijs = 12.5;
// let korting;
// const tussentotaal = aantal * prijs;
// let kortingsbedrag;
// if (aantal <= 4) {
//   korting = 0;
// } else if (aantal <= 9) {
//   korting = 5;
// } else if (aantal <= 19) {
//   korting = 10;
// } else {
//   korting = 15;
// }

// console.log(
//   `Tussentotaal: ${tussentotaal} Kortingsbedrag: ${(korting / 100) * tussentotaal} Te Betalen: ${tussentotaal - (korting / 100) * tussentotaal} Kortingspercentage: ${korting}%`,
// );

//11.

// const dag = "zaterdag";
// const uur = 15;

// if (dag == "zondag") {
//   console.log("Gesloten op zondag");
// } else if (dag == "zaterdag") {
//   if (uur >= 8 && uur < 14) {
//     console.log("Roast & Co. is open");
//   } else {
//     console.log("Roast & Co. is gesloten");
//   }
// } else {
//   if (uur >= 7 && uur < 18) {
//     console.log("Roast & Co. is open");
//   } else {
//     console.log("Roast & Co. is gesloten");
//   }
// }

// 12.

// const aantal = 3;

// const woord = aantal == 1 ? "zak" : "zakken";

// console.log(`${aantal} ${woord} koffie`);

// const voorraad = 0;
// const status = voorraad > 0 ? "Op voorraad" : "Uitverkocht";

// console.log(`${status}`);

// 13.

// const dagnummer = 1;
// let dagnaam;
// if (dagnummer > 0 && dagnummer <= 7) {
//   switch (true) {
//     case dagnummer == 1:
//       dagnaam = "maandag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//     case dagnummer == 2:
//       dagnaam = "dinsdag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//     case dagnummer == 3:
//       dagnaam = "woensdag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//     case dagnummer == 4:
//       dagnaam = "donderdag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//     case dagnummer == 5:
//       dagnaam = "vrijdag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//     case dagnummer == 6:
//       dagnaam = "zaterdag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//     case dagnummer == 7:
//       dagnaam = "zondag";
//       console.log(`Dag ${dagnummer} is ${dagnaam}`);
//       break;
//   }
// } else {
//   console.log(`ongeldig dagnummer`);
// }

// 14.

// const klanttype = "personeel";
// let korting;
// const aantal = 2;
// const prijs = 24.5;
// const tussentotaal = aantal * prijs;
// switch (klanttype) {
//   case "personeel":
//     korting = 0.25;
//     break;
//   case "abonnee":
//     korting = 0.15;
//     break;
//   case "vaste klant":
//     korting = 0.1;
//     break;

//   case "nieuw":
//     korting = 0.05;
//     break;

//   default:
//     korting = 0;
// }
// console.log(
//   `Tussentotaal: ${tussentotaal} Korting: ${korting * tussentotaal} Te Betalen bedrag: ${tussentotaal - korting * tussentotaal}`,
// );

//15.

// const formaat = "M";
// let prijs;
// let inhoud;
// switch (true) {
//   case formaat == "S":
//     prijs = 3.2;
//     inhoud = "150 ml";
//     console.log(`Latte ${formaat} (${inhoud}): € ${prijs}`);
//     break;
//   case formaat == "M":
//     prijs = 3.2 + 0.5;
//     inhoud = "250 ml";
//     console.log(`Latte ${formaat} (${inhoud}): € ${prijs}`);
//     break;
//   case formaat == "L":
//     prijs = 3.2 + 1;
//     inhoud = "350 ml";
//     console.log(`Latte ${formaat} (${inhoud}): € ${prijs}`);
//     break;
//   default:
//     console.log(`Onbekend formaat`);
// }

//16.

// const maand = 3;
// let seizoen;
// switch (true) {
//   case maand == 1 || maand == 2 || maand == 12:
//     seizoen = "winter";
//     console.log(`Maand ${maand} - ${seizoen}: Warme chai latte`);
//     break;
//   case maand == 3 || maand == 4 || maand == 5:
//     seizoen = "lente";
//     console.log(`Maand ${maand} - ${seizoen}: Honing-lavendel latte`);
//     break;
//   case maand == 6 || maand == 7 || maand == 8:
//     seizoen = "zomer";
//     console.log(`Maand ${maand} - ${seizoen}: Cold brew met vanille`);
//     break;
//   case maand == 9 || maand == 10 || maand == 11:
//     seizoen = "herfst";
//     console.log(`Maand ${maand} - ${seizoen}: Pumpkin spice latte`);
//     break;

//   default:
//     console.log(`Ongeldige maand`);
// }

//17.

// const stock = 2;
// switch (true) {
//   case stock > 5:
//     console.log("stock is ruim voorradig");
//     break;
//   case stock > 0:
//     console.log("Nog enkele stuks voorradig");
//     break;
//   default:
//     console.log("uitverkocht");
// }

//18.

// const koffiesoorten = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Brazil Santos",
//   "Kenya AA",
// ];

// console.log(
//   `${koffiesoorten.length},${koffiesoorten[0]}, ${koffiesoorten[2]}, ${koffiesoorten[koffiesoorten.length - 1]}`,
// );

//19.

// const prijzen = [24.5, 32.0, 27.9, 22.0];
// console.log(`${prijzen}`);
// prijzen[2] = prijzen[2] + 1.5;
// prijzen[0] = 25;
// prijzen.push(30);
// console.log(`${prijzen}`);

//20.

// const origines = ["Brazilë", "Ethiopië", "Colombia", "Venezuela"];

// const index = 2;

// if (origines.length >= index) {
//   console.log(`Op plaats ${index} staat ${origines[index]}`);
// } else {
//   console.log(
//     `Index ${index} bestaat niet. Kies een getal van 0 tot ${origines.length - 1}.`,
//   );
// }

//21.

// const namen = ["Huisblend", "Ethiopia Sidamo", "Colombia Supremo"];
// const prijzen = [24.5, 32.0, 27.9];
// const index = 0;
// const index2 = 2;

// console.log(`${namen[index]} kost ${prijzen[index]}`);
// console.log(`${namen[index2]} kost ${prijzen[index2]}`);
// namen.push("Kenya AA");
// prijzen.push(29.95);
// console.log(`${namen[namen.length - 1]} ${prijzen[prijzen.length - 1]}`);

//22.

// const namen = ["Huisblend", "Ethiopia Sidamo", "Colombia Supremo", "Kenya AA"];
// const prijzen = [24.5, 32.0, 27.9, 29.95];
// let totaal = 0;
// let gemiddelde = 0;

// for (let i = 0; i < namen.length; i++) {
//   console.log(`${i + 1}. ${namen[i]} - € ${prijzen[i]}`);
//   totaal = totaal + prijzen[i];
//   gemiddelde = totaal / (i + 1);
//   console.log(
//     `totaal: ${totaal.toFixed(2)} gemiddelde: ${gemiddelde.toFixed(2)}`,
//   );
// }

// for (let i = 0; i < namen.length; i++) {
//   const naam = namen[i];
//   console.log(namen[i].toUpperCase());
// }

//23.

// let minuten = 5;
// while (minuten > 0) {
//   if (minuten == 1) {
//     console.log(`Nog ${minuten} minuut.`);
//     minuten--;
//   } else {
//     console.log(`Nog ${minuten} minuten.`);
//     minuten--;
//   }
// }
// console.log(`Koffie is klaar!`);

//24.

// const prijs = 12.5;

// for (let i = 1; i <= 10; i++) {
//   if (i == 1) {
//     console.log(`${i} zak kost ${i * prijs} euro `);
//   } else {
//     console.log(`${i} zakken kosten ${i * prijs} euro `);
//   }
// }

//25.
// const producten = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Brazil Santos",
//   "KenyaAA",
// ];
// const voorraden = [12, 0, 4, 25, 2];
// let status;
// let bijnaOp = 0;
// let uitverkocht = 0;
// for (let i = 0; i < producten.length; i++) {
//   if (voorraden[i] > 5) {
//     status = "OK";
//     console.log(`${producten[i]}, ${voorraden[i]}, status: ${status}`);
//   } else if (voorraden[i] > 0) {
//     status = "Bijna op";
//     console.log(`${producten[i]}, ${voorraden[i]}, status: ${status}`);
//     bijnaOp++;
//   } else {
//     status = "Uitverkocht";
//     console.log(`${producten[i]}, ${voorraden[i]}, status: ${status}`);
//     uitverkocht++;
//   }
// }
// console.log(`Uitverkocht: ${uitverkocht} Bijna op: ${bijnaOp}`);

//26.

const namen = [
  "Huisblend",
  "Ethiopia Sidamo",
  "Colombia Supremo",
  "Brazil Santos",
  "KenyaAA",
];
const prijzen = [24.5, 32.0, 27.9, 22.0, 29.95];
let duurstePrijs = 0;
let duursteIndex = 0;
let goedkoopsteIndex = 100;
for (let i = 0; i < namen.length; i++) {
  if (prijzen[i] > duurstePrijs) {
    duursteIndex = i;
    duurstePrijs = prijzen[i];
  }
  console.log(duursteIndex);
  // else if (prijzen[i] < goedkoopsteIndex) {
  //   goedkoopsteIndex = i;
  // }
}
