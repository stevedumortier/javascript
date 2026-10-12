const namen = ["Kenia", "Brazile", "Colombia", "Dominicaanse Republiek"];

console.log([...namen].sort());

const getallen = [10, 9, 100, 2];
console.log([...getallen].sort((a, b) => a - b));
console.log([...getallen].sort((a, b) => b - a));
