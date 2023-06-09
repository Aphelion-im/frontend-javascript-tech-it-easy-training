'use strict';

window.addEventListener('load', () => {

  // Opdracht 1 - Array Methoden
  // Opdracht 1a
  const types = inventory.map((type) => type.type);
  console.log('Opdracht 1a:', types);

  // Opdracht 1b
  const tvSoldOut = inventory.filter((tv) => tv.originalStock === tv.sold);
  console.log('Opdracht 1b: ', tvSoldOut);

  // Opdracht 1c
  const tvAmbilight = inventory.filter((tv) => tv.options.ambiLight === true);
  console.log('Opdracht 1c: ', tvAmbilight);

  // Opdracht 1d
  const sortedTvs = inventory.sort((a, b) => a.price - b.price);
  console.log('Opdracht 1d: ', sortedTvs);
}); // End load event listener


/*
Opdracht 1 - Array Methoden
Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
*/
