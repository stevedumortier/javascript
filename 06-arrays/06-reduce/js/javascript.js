const prijzen = [24.5, 32, 27.5, 45];

const som = prijzen.reduce((totaal, prijs) => totaal + prijs, 0);

console.log(som);
