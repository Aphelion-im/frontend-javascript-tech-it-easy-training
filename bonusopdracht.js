'use strict';

window.addEventListener('load', () => {
  console.log('Bonusopdracht gekoppeld');

  // Bonusopdracht 1
  const btnPrice = document.querySelector('.btn-price');
  const btnAmbilight = document.querySelector('.btn-ambilight');
  const btnSoldout = document.querySelector('.btn-soldout');

  // Opdracht 1b naar functie
  const showSoldOutTvs = () => {
    const soldouttvs = inventory.filter((tv) => tv.originalStock === tv.sold);
    console.log(soldouttvs);
    return soldouttvs;
  };

  // Opdracht 1c naar functie
  const showAmbilightTvs = () => {
    const ambilights = inventory.filter(
      (tv) => tv.options.ambiLight === true
    );
    console.log(ambilights);
    return ambilights;
  };

  // Opdracht 1d naar functie
  const sortTvs = () => {
    const sorted = inventory.sort((a, b) => a.price - b.price);
    console.log(sorted);
    return sorted;
  };

  // Event listeners
  btnPrice.addEventListener('click', sortTvs);
  btnAmbilight.addEventListener('click', showAmbilightTvs);
  btnSoldout.addEventListener('click', showSoldOutTvs);

  // Bonusopdracht 2, voor nu, te moeilijk
}); // End load event listener
