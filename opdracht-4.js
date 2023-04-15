'use strict';

window.addEventListener('load', () => {
  console.log('Opdracht 4 gekoppeld');

  // Opdracht 4
  const output4 = document.querySelector('.output4');

  function tvFormat(arrayIndex) {
    const brandTv = arrayIndex.brand;
    const typeTv = arrayIndex.type;
    const nameTv = arrayIndex.name;
    return `${brandTv} ${typeTv} - ${nameTv}`;
  }

  function tvPriceFormat(arrayIndex) {
    const price = arrayIndex.price;
    return `€${price}`;
  }

  function showScreenSizes(arrayIndex) {
    let outputSizes = '';
    for (let i = 0; i < arrayIndex.availableSizes.length; i++) {
      const sizeInch = arrayIndex.availableSizes[i]; // Inches
      const sizeCm = (arrayIndex.availableSizes[i] * 2.54).toFixed(0); // Centimeters
      outputSizes = outputSizes + `<li>${sizeInch} inch (${sizeCm}) cm</li>`;
    }
    return outputSizes;
  }

  function createCards(inventoryName) {
    let finalOutput = '';
    for (let i = 0; i < inventoryName.length; i++) {
      finalOutput =
        finalOutput +
        `
        <article>
          <p>${tvFormat(inventoryName[i])}</p> 
          <p>${tvPriceFormat(inventoryName[i])}</p> 
          <ul class="screensizes">${showScreenSizes(inventoryName[i])}</ul>
        </article>
        `;
    }
    return finalOutput;
  }

  output4.innerHTML = createCards(inventory);
}); // End load event listener
