const assortiment = [
  { naam: "Huisblend", prijs: 24.5, voorraad: 8, branding: "medium" },
  { naam: "Ethiopia Sidamo", prijs: 32.0, voorraad: 3, branding: "licht" },
  { naam: "Columbia Huila", prijs: 27.5, voorraad: 0, branding: "donker" },
];

const namen = assortiment.map((zak) => zak.naam);
// console.log(namen);

const regels = assortiment.map((b) => `${b.naam}: ${b.prijs.toFixed(2)}`);
// console.log(regels.join(`\n`));

const metBTw = assortiment.map((c) => ({
  naam: c.naam,
  prijsInclusief: c.prijs * 1.06,
}));
// console.log(metBTw);

//maak een nieuwe array met de naam mijnPrijsInclusief
//en toon enkel de nieuwe prijzen met twee cijfers na de komma in deze array.
//gebruik hiervoor de array metBtw

const mijnPrijsInclusief = metBTw.map((zak) => zak.prijsInclusief.toFixed(2));
console.log(`prijs: ${mijnPrijsInclusief}`);
