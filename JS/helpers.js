function getElement(element, parent = document) {
  return parent.querySelector(element);
}

function renderFn(array, parent) {
  parent.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const newCard = document.createElement("div");
    newCard.className = "card card-style";
    newCard.style.width = "18rem";

    newCard.innerHTML = `
        <div class="img-box">
           <img class="card-img-top" width="110"  src="${element.flags.png}" alt="">
        </div>
        <div class="card-body">
          <h5 class="card-title">${element.name.official}</h5>
          <div class="card-body-style">
          <p class="card-population">Population: <span class="population-style">${element.population}</span></p>
          <p class="card-region">Region: <span class="region-style">${element.region}</span></p>
          <p class="card-capital">Capital: <span class="capital-style">${element.capital}</span></p>
          </div>
        </div>
        `;

    parent.appendChild(newCard);
  }
}
