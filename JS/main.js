const elCards = getElement(".cards");
const elElec = getElement("#electronics");
const elJew = getElement("#jewelery");
const elCloth = getElement("#clothing");
const elForm = getElement("#form");
const elSearch = getElement("#search-input");
const elSearchBtn = getElement("#search-btn");

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

elCards.addEventListener("click", (evt) => {
  if (evt.target.id === "ui-icon-f" || evt.target.id === "ui-icon") {
    const id = Number(evt.target.dataset.id);
    products.forEach((element) => {
      if (element.id === id) {
        element.isFav = !element.isFav;
      }
    });
  }
  renderFn(products, elCards);
});

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newArr = [];
  products.forEach((element) => {
    if (element.title.toLowerCase().includes(elSearch.value.toLowerCase())) {
      newArr.push(element);
    }
  });
  elForm.reset();
  renderFn(newArr, elCards);
});
