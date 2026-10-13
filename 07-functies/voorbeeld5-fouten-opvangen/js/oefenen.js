//foutenopvangen

function leesAantal(invoer) {
  const aantal = Number(invoer);

  if (Number.isNaN(aantal)) {
    throw new Error(`"${invoer}" is geen geldig aantal.`);
  }
  return aantal;
}
// console.log(leesAantal("x"));

try {
  const aantal = leesAantal(3);
  console.log(`Je bestelt ${aantal} stuks`);
} catch (fout) {
  console.warn("Er ging iets mis:", fout.message);
}

console.log("En het script loopt gewoon verder");
