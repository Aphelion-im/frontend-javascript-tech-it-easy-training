'use strict';

window.addEventListener('load', () => {

  // Opdracht 2 - Elementen in de DOM plaatsen
  // opdracht 2a
  let tvsSold = 0;
  inventory.filter(function (tvsold) {
    tvsSold += tvsold.sold;
    return tvsSold;
  });

  console.log('Opdracht 2a: ', `Aantal TV's verkocht: ${tvsSold}.`);

// Opdracht 2b
const output2b = document.querySelector(".output2b");
output2b.style.color = 'green';
output2b.textContent = `opdracht 2b. Aantal verkochte TV's: ${tvsSold}`;

// Opdracht 2c
let tvsBought = 0;
inventory.filter(function (tvsbought) {
  tvsBought = tvsBought + tvsbought.originalStock;
  return tvsBought;
});

console.log('Opdracht 2c: ', `Aantal TV's ingekocht: ${tvsBought}.`);


// Opdracht 2d
const output2d = document.querySelector(".output2d");
output2d.style.color = 'blue';
output2d.textContent = `opdracht 2d. Aantal ingekochte TV's: ${tvsBought}`;

// Opdracht 2e
const tvsToBeSold = tvsBought - tvsSold;
const output2e = document.querySelector(".output2e");
output2e.style.color = 'red';
output2e.textContent = `opdracht 2e. Aantal nog te verkopen TV's: ${tvsToBeSold}`;
  
}); // End load event listener
