//De prijs van een zak koffiebonen

const zak = "huisblend";
const basisprijs = 24.5;
const aantal = 3;
const klanttype = "abonnee";
const voorraad = 8;

let korting;

//meervoudige selectie
switch (klanttype) {
  case "abonnee":
    korting = 0.15;
    break;
  case "vaste klant":
    korting = 0.1;
    break;
  default:
    korting = 0;
}

const tussentotaal = basisprijs * aantal; //sequentie
const kortingBedrag = tussentotaal * korting;
const teBetalen = tussentotaal - kortingBedrag;
