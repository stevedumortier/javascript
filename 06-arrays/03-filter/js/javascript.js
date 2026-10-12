const assortiment = [
  { naam: "Huisblend", prijs: 24.5, voorraad: 8, branding: "medium" },
  { naam: "Ethiopia Sidamo", prijs: 32.0, voorraad: 3, branding: "licht" },
  { naam: "Columbia Huila", prijs: 27.5, voorraad: 0, branding: "donker" },
];

const beschikbaar = assortiment.filter((b) => b.voorraad > 0);
console.log(beschikbaar.length);
