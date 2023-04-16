'use strict';

window.addEventListener('load', () => {

  // Opdracht 3 - Array methoden en functies
  // Opdracht 3a
  const output3a = document.querySelector('.output3a');

  const brandsListItems = inventory.map((brand) => {
    return `<li>${brand.brand}</li>`; // Of met createElement, appendChild, etc.
  });

  const removedCommaList = brandsListItems.join(''); // Replace , with nothing

  output3a.innerHTML = removedCommaList;

  // Opdracht 3b
  const output3b = document.querySelector('.output3b');

  function showBrands(tvList) {
    const tvListItems = tvList.map((brand) => {
      return `<li>${brand.brand}</li>`;
    });
    output3b.innerHTML = tvListItems.join('');
  }

  showBrands(inventory); 
}); // End load event listener
