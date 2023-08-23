const elCards = getElement(".cards");
const elElec = getElement("#electronics");
const elJew = getElement("#jewelery");
const elCloth = getElement("#clothing");

renderFn(products, elCards);

elElec.addEventListener("click", () => {
  const elec = [];

  products.forEach((element) => {
    if (element.category == "electronics") {
      elec.push(element);
    }
  });
  renderFn(elec, elCards);
});

elJew.addEventListener("click", () => {
  const jew = [];

  products.forEach((element) => {
    if (element.category == "jewelery") {
      jew.push(element);
    }
  });
  renderFn(jew, elCards);
});

elCloth.addEventListener("click", () => {
  const cloth = [];

  products.forEach((element) => {
    if (element.category == "clothing") {
      cloth.push(element);
    }
  });
  renderFn(cloth, elCards);
});