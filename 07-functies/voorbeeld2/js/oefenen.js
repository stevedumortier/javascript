function berekenTotaal(prijs, aantal = 1, korting = 0) {
  const bruto = prijs * aantal;
  return bruto - bruto * korting;
}

console.log(berekenTotaal(24.5));
console.log(berekenTotaal(24.5, 3));
console.log(berekenTotaal(24.5, 3, 0.15));
