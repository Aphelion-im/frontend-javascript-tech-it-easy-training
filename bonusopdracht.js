'use strict';

window.addEventListener('load', () => {
  // Bonusopdracht 1
  const btnPrice = document.querySelector('.btn-price');
  const btnAmbilight = document.querySelector('.btn-ambilight');
  const btnSoldout = document.querySelector('.btn-soldout');

  // Bonusopdracht 2
  const btnPrice2 = document.querySelector('.btn-price-2');
  const btnAmbilight2 = document.querySelector('.btn-ambilight-2');
  const btnSoldout2 = document.querySelector('.btn-soldout-2');
  const output5 = document.querySelector('.output5');

  // Bonusopdrachten
  // Opdracht 1d naar functie
  const sortTvs = () => {
    return inventory.sort((a, b) => a.price - b.price);
  };

  // Opdracht 1c naar functie
  const showAmbilightTvs = () => {
    return inventory.filter(tv => tv.options.ambiLight);
  };

  // Opdracht 1b naar functie
  const showSoldOutTvs = () => {
    return inventory.filter((tv) => tv.originalStock === tv.sold);
  };

  // Bonusopdracht 2
  // Output bij output5. Kopie van deze functie uit Opdracht-4.js
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
      output5.appendChild(article);
    });
  }

  // Event listeners
  btnPrice.addEventListener('click', () => {
    console.log('Bonusopdracht 1.1: ', "Sorted TV's:", sortTvs());
  });

  btnAmbilight.addEventListener('click', () => {
    console.log('Bonusopdracht 1.2: ', "Ambilight TV's:", showAmbilightTvs());
  });

  btnSoldout.addEventListener('click', () => {
    console.log('Bonusopdracht 1.3: ', "Sold out TV's: ", showSoldOutTvs());
  });

  btnPrice2.addEventListener('click', () => {
    output5.replaceChildren(); // Remove previous elements before appending new ones
    showTvs(sortTvs());
  });

  btnAmbilight2.addEventListener('click', () => {
    output5.replaceChildren(); // Or with innerHTML = ''; textContent = '';
    showTvs(showAmbilightTvs());
  });

  btnSoldout2.addEventListener('click', () => {
    output5.replaceChildren();
    showTvs(showSoldOutTvs());
  });
}); // End load event listener
