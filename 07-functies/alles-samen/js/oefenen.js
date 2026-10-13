const BTW_TARIEF = 0.06;
function bepaalKorting(klanttype) {
  switch (klanttype) {
    case "abonnee":
      return 0.15;
    case "vaste klant":
      return 0.1;
    default:
      return 0;
  }
}
function berekenBon(prijs, aantal, klanttype) {
  if (aantal <= 0) {
    throw new Error("Het aantal moet groter zijn dan nul.");
  }
  const excl = prijs * aantal;
  const korting = bepaalKorting(klanttype);
  const naKorting = excl - excl * korting;
  return naKorting + naKorting * BTW_TARIEF;
}
try {
  const teBetalen = berekenBon(24.5, 3, "abonnee");
  console.log(`Te betalen: € ${teBetalen.toFixed(2)}`);
} catch (fout) {
  console.error(fout.message);
}
