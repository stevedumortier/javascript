const voorraad = 10;

if (voorraad > 5) {
  //iets doen
  console.log(`Voorraad is ruim voorradig.`);
} else if (voorraad > 0) {
  //ook iets doen
  console.log(`Nog enkele stuks voorradig.`);
} else {
  //iets anders doen
  console.log(`uitverkocht`);
}

//if & else is een enkelvoudige selectie, ene of het andere
//if & else if & else is een meervoudige selectie

//bij een meervoudige selectie heb je ook een switch

const klanttype = "abonnee";
let korting;

switch (klanttype) {
  case "abonnee":
    korting = 0.15;
    break;
  case "vaste klant":
    korting = 0.1;
    break;

  case "nieuwe klant":
    korting = 0.05;
    break;
  default:
    korting = 0;
}

const stock = 10;
switch (stock) {
  case stock > 5:
    console.log(`stock is ruim voorradig`);
    break;

  case stock > 0:
    console.log(`Nog enkele stuks voorradig.`);
    break;

  default:
    console.log(`uitverkocht`);
}

/----TERNARY OPERATOR----/
const mijnstock = 0;

const status1 = voorraad > 0 ? "Op voorraad" : "Uitverkocht";

const status2 = if(voorraad > 0) {
  console.log(`op voorraad`)}
  else{ console.log(`uitverkocht`)};
