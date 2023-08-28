const elCards = getElement(".cards");
const elForm = getElement("#form");
const elSearch = getElement(".search");
const elFilterOpen = getElement(".filter__title");
const elFilterClose = getElement(".filter__close");
const africa = getElement(".africa");
const america = getElement(".america");
const asia = getElement(".asia");
const europe = getElement(".europe");
const ocean = getElement(".ocean");

let countries;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderFn(res, elCards);
    countries = res;
  });

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newArr = [];

  countries.forEach((element) => {
    if (element.name.official.includes(elSearch.value)) {
      newArr.push(element);
    }
  });
  elForm.reset();
  renderFn(newArr, elCards);
});

elFilterOpen.addEventListener("click", () => {
  elFilterList.className += " show";
  elFilterClose.className += " show";
  elFilterOpen.className += " close";
});

elFilterClose.addEventListener("click", () => {
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
});

