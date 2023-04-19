'use strict';

  // Opdracht 4
  const output4 = document.querySelector('.output4');
  const output4e = document.querySelector('.output4e');

  // Opdracht 4a
  function tvFormat(arrayIndex) {
    const brandTv = arrayIndex.brand;
    const typeTv = arrayIndex.type;
    const nameTv = arrayIndex.name;
    return `${brandTv} ${typeTv} - ${nameTv}`;
  }

  // Opdracht 4b
  function tvPriceFormat(arrayIndex) {
    const price = arrayIndex.price;
    return `€${price}`;
  }

  // Opdracht 4c
  function showScreenSizes(arrayIndex) {
    let outputSizes = '';
    for (let i = 0; i < arrayIndex.availableSizes.length; i++) {
      const sizeInch = arrayIndex.availableSizes[i]; // Inches
      const sizeCm = (arrayIndex.availableSizes[i] * 2.54).toFixed(0); // Centimeters
      outputSizes += `${sizeInch} inch (${sizeCm} cm)`;
      
      if (i < arrayIndex.availableSizes.length - 1) { // Country information part 2 opdracht
        outputSizes += " | ";
      }
    }
    return outputSizes;
  }

  // Opdracht 4d
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

  // Opdracht 4e
  // Output 4e
  function showTvs(inventoryName) {
    inventoryName.map((product) => {
      const article = document.createElement('article');
      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');
      const list = document.createElement('li');
      paragraph1.textContent = tvFormat(product);
      paragraph2.textContent = tvPriceFormat(product);
      list.classList.add('screensizes');
      list.textContent = showScreenSizes(product);
      article.append(paragraph1, paragraph2, list);
      output4e.appendChild(article);
    });
  }

  showTvs(inventory);

