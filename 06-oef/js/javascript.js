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

// const namen = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Brazil Santos",
//   "KenyaAA",
// ];
// const prijzen = [24.5, 32.0, 27.9, 22.0, 29.95];
// let duursteIndex = 0;
// let goedkoopsteIndex = 0;
// for (let i = 0; i < namen.length; i++) {
//   if (prijzen[i] > prijzen[duursteIndex]) {
//     duursteIndex = i;
//     console.log(i);
//   } else if (prijzen[i] < prijzen[goedkoopsteIndex]) {
//     goedkoopsteIndex = i;
//     console.log(i);
//   }
// }
// console.log(
//   `Duurste: ${namen[duursteIndex]} (${prijzen[duursteIndex]}) Goedkoopste: ${namen[goedkoopsteIndex]} (${prijzen[goedkoopsteIndex]} Verschil: ${prijzen[duursteIndex] - prijzen[goedkoopsteIndex]}`,
// );

//27:

// const bestellingen = [
//   "abonnee",
//   "nieuw",
//   "vaste klant",
//   "abonnee",
//   "onbekend",
//   "abonnee",
// ];
// const bedrag = 30;
// let korting;
// let totaal = 0;
// let abonnees = 0;
// for (let i = 0; i < bestellingen.length; i++) {
//   switch (bestellingen[i]) {
//     case "abonnee":
//       korting = 0.15;
//       abonnees++;
//      break;
//     case "vaste klant":
//       korting = 0.1;
//       break;
//     case "nieuw":
//       korting = 0.05;
//       break;
//     default:
//       korting = 0;
//   }
//   totaal += bedrag - bedrag * korting;
//   console.log(`${bestellingen[i]}: ${bedrag - bedrag * korting}`);
// }
// console.log(`Aantal abonnees: ${abonnees} Omzet vandaag: ${totaal}`);

//28.

// let budget = 20;
// const prijs = 2.5;
// let aantalKoffies = 0;
// while (budget >= prijs) {
//   if (aantalKoffies % 5 == 0) {
//     console.log(`Koffie ${aantalKoffies}: gratis!`);
//     aantalKoffies++;
//   } else {
//     budget -= prijs;
//     console.log(`Koffie ${aantalKoffies}: betaald, nog ${budget} over`);
//     aantalKoffies++;
//   }
// }
// console.log(`Totaal: ${aantalKoffies} Budget over: ${budget}`);

//29.

// const soorten = ["Espresso", "Cappuccino", "Latte"];
// const basisprijzen = [2.2, 3.0, 3.4];
// const formaten = ["S", "M", "L"];
// let prijs = 0;

// for (let i = 0; i < soorten.length; i++) {
//   for (let y = 0; y < formaten.length; y++) {
//     if (soorten[i] == soorten[0] && formaten[y] == formaten[2]) {
//       console.log("Espresso L: niet beschikbaar");
//     } else {
//       switch (formaten[y]) {
//         case "S":
//           prijs = basisprijzen[i];
//           break;
//         case "M":
//           prijs = basisprijzen[i] + 0.5;
//           break;
//         case "L":
//           prijs = basisprijzen[i] + 1;
//           break;
//       }
//       console.log(`${soorten[i]} ${formaten[y]}: ${prijs}`);
//       console.log(`-----------------------------------`);
//     }
//   }
// }

//30.

// const producten = [
//   "Huisblend",
//   "Ethiopia Sidamo",
//   "Colombia Supremo",
//   "Kenya AA",
// ];
// const prijzen = [24.5, 32.0, 27.9, 29.95];
// const aantallen = [2, 0, 1, 3]; // wat de klant wil kopen
// const voorraad = [10, 5, 1, 2]; // wat er in de winkel ligt
// const klanttype = "vaste klant";

// let subtotaal = 0;
// let totaal = 0;
// let korting = 0;
// let verzendkosten = 0;

// console.log(`ROAST & CO. – KASSATICKET`);
// console.log(`---------------------------`);

// for (let i = 0; i < producten.length; i++) {
//   if (aantallen[i] != 0) {
//     if (aantallen[i] > voorraad[i]) {
//       console.log(
//         `Let op: slechts ${voorraad[i]} x ${producten[i]} beschikbaar`,
//       );
//       console.log(
//         `${voorraad[i]} x ${producten[i]}  à ${prijzen[i]} = ${prijzen[i] * voorraad[i]} `,
//       );
//       subtotaal += prijzen[i] * voorraad[i];
//     } else {
//       console.log(
//         `${aantallen[i]} x ${producten[i]}  à ${prijzen[i]} = ${prijzen[i] * aantallen[i]} `,
//       );
//       subtotaal += prijzen[i] * aantallen[i];
//     }
//   }
// }
// switch (klanttype) {
//   case "abonnee":
//     korting = 0.15;
//     totaal = subtotaal - subtotaal * korting;

//     break;
//   case "vaste klant":
//     korting = 0.1;
//     totaal = subtotaal - subtotaal * korting;
//     break;
//   case "nieuw":
//     korting = 0.05;
//     totaal = subtotaal - subtotaal * korting;
//     break;
//   default:
//     korting = 0;
//     totaal = subtotaal - subtotaal * korting;
// }
// if (totaal >= 50) {
//   verzendkosten = 0;
// } else {
//   verzendkosten = 4.95;
// }
// console.log(
//   `Subtotaal: ${subtotaal} Korting: ${korting * 100}% Verzendkosten: ${verzendkosten} Totaal: ${totaal} BTW: ${totaal - totaal / 1.21}`,
// );

//Extra 1.

// const hoogte = 9;
// const bekers = 11;
// let bekersNodig = 0;
// let bekersOver = bekers;
// let rijenToren = 0;

// for (let i = 1; i <= hoogte; i++) {
//   if (i < hoogte) {
//     console.log(`  `.repeat(hoogte - i) + `[_] `.repeat(i));
//   } else {
//     console.log(`[_] `.repeat(i));
//   }
//   bekersNodig += i;
// }
// console.log(`Een toren van ${hoogte} rijen heeft ${bekersNodig} bekers nodig.`);
// for (let i = 1; i <= bekersOver; i++) {
//   bekersOver -= i;
//   rijenToren++;
// }
// const woordBeker = bekersOver == 1 ? "beker" : "bekers";
// const woordBlijft = bekersOver == 1 ? "blijft" : "blijven";
// console.log(
//   `Met ${bekers} bekers bouw je een toren van ${rijenToren} rijen hoog.`,
// );
// console.log(`Er ${woordBlijft} ${bekersOver} ${woordBeker} over.`);

//Extra 2.

// const aantalBestellingen = 1000;
// const bestelNummer = [];
// let regel = "";
// let verschil = 0;
// let grootsteVerschil = 0;
// let verschilStart = 0;
// let verschilEinde = 0;

// for (let i = 2; i <= aantalBestellingen; i++) {
//   let isPrime = true;
//   for (let y = 2; y < i; y++) {
//     if (i % y === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     bestelNummer.push(i);
//   }
// }

// for (let i = 0; i < bestelNummer.length; i++) {
//   // Zet het getal om naar tekst en vul links aan met spaties tot 4 tekens
//   regel += String(bestelNummer[i]).padStart(4, " ");

//   if ((i + 1) % 10 === 0) {
//     console.log(regel);
//     regel = "";
//   }
// }

// if (regel !== "") {
//   console.log(regel);
// }
// console.log(
//   `${bestelNummer.length} van de ${aantalBestellingen} klanten krijgen een koekje.`,
// );

// for (let i = 1; i < bestelNummer.length; i++) {
//   verschil = bestelNummer[i] - bestelNummer[i - 1];
//   if (verschil > grootsteVerschil) {
//     grootsteVerschil = verschil;
//     verschilStart = bestelNummer[i - 1];
//     verschilEinde = bestelNummer[i];
//   }
// }
// console.log(
//   `Grootste afstand: ${grootsteVerschil}(tussen ${verschilStart} en ${verschilEinde})`,
// );

//Extra 3.

const teBetalen = 11.56;
const betaald = 50;
let wisselgeld = betaald - teBetalen;
let hoeveelheid = [];
const biljetten = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
//Biljetten: € 50, € 20, € 10 en € 5. Munten: € 2, € 1, € 0.50, € 0.20, € 0.10, € 0.05, € 0.02 en € 0.01.

console.log(`Te betalen: €${teBetalen}`);
console.log(`Betaald: €${betaald}`);
console.log(`wisselgeld: €${wisselgeld}`);
console.log(`---------------------------`);

while (wisselgeld > 0) {
  for (let i = 0; i < biljetten.length; i++) {
    hoeveelheid.push(Math.floor(wisselgeld / biljetten[i]));
    wisselgeld = wisselgeld - hoeveelheid[i] * biljetten[i];
    console.log(wisselgeld);
  }
}
console.log(hoeveelheid);
