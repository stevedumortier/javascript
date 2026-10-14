//------------OEFENINGEN------------

// Oefening 1 — Een persoonlijke begroeting

// function begroet(naam) {
//   return `Hallo, ${naam}!`;
// }

// console.log(begroet("Sara"));
// console.log(begroet("Mohamed"));
// console.log(begroet("Lotte"));

// Oefening 2 — De oppervlakte van een kamer

// function berekenOppervlakte(lengte, breedte) {
//   return lengte * breedte;
// }

// const woonKamer = berekenOppervlakte(6.5, 4);
// const slaapKamer = berekenOppervlakte(3.2, 3);

// console.log(`Woonkamer: ${woonKamer} m²`);
// console.log(`Slaapkamer: ${slaapKamer.toFixed(2)} m²`);
// console.log(`Samen: ${(woonKamer + slaapKamer).toFixed(2)} m²`);

// Oefening 3 — Van Celsius naar Fahrenheit

// const naarFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// function naarFahrenheitKlassiek(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(naarFahrenheit(0));
// console.log(naarFahrenheit(21));
// console.log(naarFahrenheit(-10));
// console.log(naarFahrenheitKlassiek(21));

// Oefening 4 — Prijs inclusief btw

// const berekenInclBtw = (bedrag, tarief = 0.21) => bedrag + bedrag * tarief;

// console.log(`Laptop: € ${berekenInclBtw(800).toFixed(2)}`);
// console.log(`Brood: € ${berekenInclBtw(3.5, 0.06).toFixed(2)}`);

// Oefening 5 — Even of oneven?

// const isEven = (getal) => getal % 2 == 0;

// console.log(isEven(14));
// console.log(isEven(7));
// const rugnummer = 7;
// console.log(
//   `Nummer ${rugnummer} speelt op ${isEven(rugnummer) ? "terrein A" : "terrein B"}.`,
// );

// Oefening 6 — Mag je binnen in de cinema?

// const magBinnen = (leeftijd, metVolwassene = false) =>
// leeftijd >= 16 || (leeftijd >= 12 && metVolwassene == true);

// console.log(magBinnen(17)); // oud genoeg
// console.log(magBinnen(13)); // te jong, alleen
// console.log(magBinnen(13, true)); // te jong, maar met volwassene
// console.log(magBinnen(10, true)); // te jong, ook met volwassene

// Oefening 7 — De grootste van drie

// const geefGrootste = (a, b, c) => {
//   const scores = [a, b, c];
//   let grootste = a;
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > grootste) {
//       grootste = scores[i];
//     }
//   }
//   return grootste;
// };

// console.log(geefGrootste(12, 7, 3));
// console.log(geefGrootste(4, 19, 8));
// console.log(geefGrootste(-5, -2, -9));
// console.log(geefGrootste(6, 6, 2));
// console.log(geefGrootste(7, 2));

//Oefening 8 — Van punten naar beoordeling

// function geefBeoordeling(punten) {
//   if (punten < 0 || punten > 20) {
//     return `ongeldig`;
//   } else if (punten >= 17) {
//     return `uitmuntend`;
//   } else if (punten >= 14) {
//     return "goed";
//   } else if (punten >= 10) {
//     return `voldoende`;
//   } else {
//     return `onvoldoende`;
//   }
// }
// const resultaten = [18, 15, 12, 10, 7, 23];
// for (const punten of resultaten) {
//   console.log(`${punten}/20: ${geefBeoordeling(punten)}`);
// }

//Oefening 9 — Welke dag is het?

// function geefDagnaam(nummer) {
//   switch (nummer) {
//     case 1:
//       return `maandag`;
//     case 2:
//       return `dinsdag`;
//     case 3:
//       return `woensdag`;
//     case 4:
//       return `donderdag`;
//     case 5:
//       return `vrijdag`;
//     case 6:
//       return `zaterdag`;
//     case 7:
//       return `zondag`;
//     default:
//       return `onbekende dag`;
//   }
// }

// function isWeekend(nummer) {
//   if (geefDagnaam(nummer) == `zaterdag` || geefDagnaam(nummer) == `zondag`) {
//     return true;
//   } else {
//     return false;
//   }
// }
// for (let i = 1; i <= 7; i++) {
//   console.log(isWeekend(i));
//   const extra = isWeekend(i) ? " (weekend)" : "";
//   console.log(`${i}: ${geefDagnaam(i)}${extra}`);
// }
// console.log(geefDagnaam(9));

//Oefening 10 — Het parkeertarief

// const uurtarief = 2.5;
// const dagmaximum = 15;
// function berekenParkeerkost(minuten) {
//   if (minuten <= 30) {
//     return 0;
//   } else {
//     let uren = Math.ceil(minuten / 60);
//     const tarief = uren * uurtarief;
//     if (tarief <= dagmaximum) {
//       return tarief;
//     } else {
//       return dagmaximum;
//     }
//   }
// }
// const duren = [20, 45, 61, 200, 600];
// for (const minuten of duren) {
//   console.log(`${minuten} min: € ${berekenParkeerkost(minuten).toFixed(2)}`);
// }

//Oefening 11 — Optellen tot n

// function somTot(n) {
//   let totaal = 0;
//   for (let i = 1; i <= n; i++) {
//     totaal += i;
//   }
//   return totaal;
// }
// const isEven = (getal) => getal % 2 == 0;

// function somVanEvenTot(n) {
//   let totaal = 0;
//   for (let i = 1; i <= n; i++) {
//     if (isEven(i)) {
//       totaal += i;
//     }
//   }
//   return totaal;
// }

// console.log(somTot(10));
// console.log(somTot(100));
// console.log(somVanEvenTot(10));
// console.log(somVanEvenTot(100));

// Oefening 12 — Koffie, Bonen of KoffieBonen

// function geefWoord(getal) {
//   if (getal % 3 == 0 && getal % 5 == 0) {
//     return "KoffieBonen";
//   } else if (getal % 3 == 0) {
//     return `Koffie`;
//   } else if (getal % 5 == 0) {
//     return `Bonen`;
//   } else {
//     return `${getal}`;
//   }
// }

// function maakReeks(van, tot) {
//   let reeks = [];
//   for (let i = van; i <= tot; i++) {
//     reeks.push(geefWoord(i));
//   }
//   return reeks;
// }

// const reeks = maakReeks(1, 15);
// console.log(reeks.join(", "));
// console.log(reeks.length);

//Oefening 13 — De tafel van vermenigvuldiging

// function maakTafel(getal, tot = 10) {
//   let tafel = [];
//   for (let i = 1; i <= tot; i++) {
//     tafel.push(`${i} x ${getal} = ${i * getal}`);
//   }
//   return tafel;
// }

// for (const regel of maakTafel(7)) {
//   console.log(regel);
// }
// console.log("---");
// for (const regel of maakTafel(12, 3)) {
//   console.log(regel);
// }

//Oefening 14 — Klinkers tellen

// function isKlinker(letter) {
//   return "aeiou".includes(letter.toLowerCase());
// }

// function telKlinkers(tekst) {
//   let aantal = 0;

//   for (const letter of tekst) {
//     if (isKlinker(letter)) {
//       aantal++;
//     }
//   }
//   return aantal;
// }

// const woorden = ["programmeren", "JavaScript", "Brrr"];

// for (const woord of woorden) {
//   console.log(`${woord}: ${telKlinkers(woord)} klinkers`);
// }

//Oefening 15 — Faculteit

// function berekenFaculteit(n) {
//   if (n < 0) {
//     throw new Error("Faculteit bestaat niet voor negatieve getallen.");
//   }

//   let resultaat = 1;
//   for (let i = 2; i <= n; i++) {
//     resultaat *= i;
//   }
//   return resultaat;
// }

// for (let n = 0; n <= 6; n++) {
//   console.log(`${n}! = ${berekenFaculteit(n)}`);
// }
// try {
//   console.log(berekenFaculteit(-3));
// } catch (fout) {
//   console.log("Fout:", fout.message);
// }

//Oefening 16 — Zoek de fouten

// function berekenGemiddelde(a, b) {
//   const gemiddelde = (a + b) / 2; //je moet gemiddelde returnen
//   return gemiddelde; //fix
// }
// const verdubbel = (x) => {
//   return x * 2; //return
// };
// function berekenKorting(bedrag, percentage = 10) {
//   //klant wordt niet gebruikt dus mag weg, parameter met standaard value moet achteraan
//   return (bedrag * percentage) / 100;
// }
// function telPositief(getallen) {
//   let aantal = 0;
//   for (const getal of getallen) {
//     //return staat in de for lus ipv op het einde van de function
//     if (getal > 0) {
//       aantal++;
//     }
//   }
//   return aantal;
// }

// console.log(berekenGemiddelde(8, 14)); // verwacht: 11
// console.log(verdubbel(21)); // verwacht: 42
// console.log(berekenKorting(80, 25)); // verwacht: 20
// console.log(berekenKorting(80)); // verwacht: 8
// console.log(telPositief([3, -1, 7, 0, 5])); // verwacht: 3

//Oefening 17 — Het klasgemiddelde

// const toets = [12, 8, 15, 17, 9, 11, 6, 14];
// function berekenGemiddelde(punten) {
//   if (punten.length == 0) {
//     return 0;
//   } else {
//     let totaal = 0;
//     for (const score of punten) {
//       totaal += score;
//     }
//     const gemiddelde = totaal / punten.length;
//     return gemiddelde;
//   }
// }

// function telGeslaagden(punten, grens = 10) {
//   let geslaagd = 0;
//   for (score of punten) {
//     if (score >= grens) {
//       geslaagd++;
//     }
//   }
//   return geslaagd;
// }

// function maakRapport(punten) {
//   return `${telGeslaagden(punten)} van de ${toets.length} geslaagd, gemiddelde ${berekenGemiddelde(punten)}/20`;
// }
// console.log(berekenGemiddelde(toets));
// console.log(telGeslaagden(toets));
// console.log(telGeslaagden(toets, 14));
// console.log(maakRapport(toets));
// console.log(maakRapport([]));

//Oefening 18 — Sparen voor een scooter

// function berekenJarenTotDoel(startbedrag, rente = 0.03, doel = 1500) {
//   let bedrag = startbedrag;
//   let jaren = 0;
//   if (rente <= 0 && bedrag < doel) {
//     throw new Error(`Zonder rente bereik je het doel nooit.`);
//   } else {
//     while (bedrag < doel) {
//       jaren++;
//       bedrag = bedrag + bedrag * rente;
//     }
//   }
//   return jaren;
// }

// function berekenEindbedrag(startbedrag, rente, jaren) {
//   let bedrag = startbedrag;
//   for (let i = 1; i <= jaren; i++) {
//     bedrag = bedrag + bedrag * rente;
//   }
//   return bedrag;
// }

// const jaren = berekenJarenTotDoel(1200, 0.03, 1500);
// console.log(`Na ${jaren} jaar is het doel bereikt.`);
// console.log(`Bedrag dan: € ${berekenEindbedrag(1200, 0.03, jaren).toFixed(2)}`);
// console.log(berekenJarenTotDoel(2000, 0.03, 1500));
// try {
//   berekenJarenTotDoel(100, 0, 500);
// } catch (fout) {
//   console.log("Fout:", fout.message);
// }

//Oefening 19 — Is dit een sterk wachtwoord?

// function isCijfer(teken) {
//   return `123456789`.includes(teken);
// }

// function isHoofdletter(teken) {
//   if (teken === teken.toUpperCase() && teken !== teken.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function controleerWachtwoord(wachtwoord) {
//   if (wachtwoord.length < 8) {
//     return "te kort";
//   }

//   let heeftCijfer = false;
//   let heeftHoofdletter = false;
//   let heeftSpatie = false;

//   for (const teken of wachtwoord) {
//     if (isCijfer(teken)) {
//       heeftCijfer = true;
//     } else if (isHoofdletter(teken)) {
//       heeftHoofdletter = true;
//     } else if (teken === " ") {
//       heeftSpatie = true;
//     }
//   }

//   if (heeftSpatie) {
//     return "bevat een spatie";
//   }
//   if (!heeftCijfer) {
//     return "geen cijfer";
//   }
//   if (!heeftHoofdletter) {
//     return "geen hoofdletter";
//   }
//   return "sterk";
// }

// const pogingen = [
//   "kort1A",
//   "geencijferHier",
//   "geen hoofdletter 1",
//   "Met spatie 123",
//   "Koffie2026",
// ];
// for (const ww of pogingen) {
//   console.log(`${ww} → ${controleerWachtwoord(ww)}`);
// }

//Oefening 20 — Priemgetallen

// function isPriem(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function geefPriemgetallen(tot) {
//   const priemgetallen = [];
//   for (let i = 2; i <= tot; i++) {
//     if (isPriem(i)) {
//       priemgetallen.push(i);
//     }
//   }
//   return priemgetallen;
// }

// function geefEerstePriemNa(getal) {
//   let kandidaat = getal + 1;
//   while (!isPriem(kandidaat)) {
//     kandidaat++;
//   }
//   return kandidaat;
// }

// console.log(isPriem(1), isPriem(2), isPriem(15), isPriem(97));
// console.log(geefPriemgetallen(30).join(" "));
// console.log(geefEerstePriemNa(100));
// console.log(geefEerstePriemNa(13));

//Oefening 21 — Arrow functions in arraymethoden

// const prijzen = [12.5, 89, 4.99, 150, 23, 61.2];

// const metBtw = (prijs) => prijs + prijs * 0.21;

// const isDuur = (prijs) => prijs > 50;

// const telOp = (som, prijs) => som + prijs;

// const sorteerAflopend = (getallen) => [...getallen].sort((a, b) => b - a);

// console.log(
//   prijzen
//     .map(metBtw)
//     .map((p) => p.toFixed(2))
//     .join(" | "),
// );
// console.log(prijzen.filter(isDuur));
// console.log(prijzen.reduce(telOp, 0).toFixed(2));
// const totaalDuurIncl = prijzen.filter(isDuur).map(metBtw).reduce(telOp, 0);
// console.log(`Duur, incl. btw: € ${totaalDuurIncl.toFixed(2)}`);
// console.log(sorteerAflopend(prijzen));
// console.log(prijzen);

//Oefening 22 — Hoger of lager

// const beoordeelGok = (gok, geheim) => {
//   if (gok > geheim) {
//     return "hoger";
//   }
//   if (gok < geheim) {
//     return "lager";
//   }
//   return "juist";
// };

// function speelSpel(geheim, gokken, maxPogingen = 5) {
//   let pogingen = 0;
//   let geraden = false;

//   for (const gok of gokken) {
//     if (pogingen === maxPogingen) {
//       break;
//     }
//     pogingen++;
//     const oordeel = beoordeelGok(gok, geheim);
//     console.log(`Poging ${pogingen}: ${gok} → ${oordeel}`);
//     if (oordeel === "juist") {
//       geraden = true;
//       break;
//     }
//   }
//   return geraden ? pogingen : -1;
// }

// const p1 = speelSpel(42, [50, 25, 37, 43, 42, 10]);
// console.log(`→ resultaat: ${p1}`);
// const p2 = speelSpel(77, [10, 20, 30], 2);
// console.log(`→ resultaat: ${p2}`);
// const p3 = speelSpel(8, [8]);
// console.log(`→ resultaat: ${p3}`);
