const assortiment = [
  { naam: "Huisblend", prijs: 24.5, voorraad: 8, branding: "medium" },
  { naam: "Ethiopia Sidamo", prijs: 32.0, voorraad: 3, branding: "licht" },
  { naam: "Columbia Huila", prijs: 27.5, voorraad: 0, branding: "dark" },
];

const gezocht = assortiment.find((b) => b.naam === "Ethiopia Sidamo");
console.log(gezocht.prijs);

const nietGevonden = assortiment.find((b) => b.naam === "Kenya AA");
console.log(nietGevonden);

const plaats = assortiment.findIndex((b) => b.voorraad === 0);
console.log(plaats);

console.log(assortiment.some((b) => b.voorraad === 0)); //is er een voorraad gelijk aan 0?
console.log(assortiment.every((b) => b.prijs > 20)); //zijn alle prijzen groter dan 20?
