function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCards = getElement(".cards");

function renderFn(array, parent) {
  parent.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const newCard = document.createElement("div");
    newCard.className = "card card-style";
    newCard.style.width = "15rem";
    newCard.style.width = "15rem";

    newCard.innerHTML = `
      <div class="img-box">
         <img class="card-img-top" width="110"  src="${array[i].image}" alt="">
      </div>
      <div class="card-body">
        <h5 class="card-title">${array[i].title}</h5>
        <div class="card-body-style">
        <p class="card-rate">
        <img data-v-b3e9397c="" src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e" class="noselect rating-icon" data-test-id="icon__rating-star" style="width: 14px;">
        ${array[i].rating.rate}
        </p>
        <p class="dont">Bo'lib to'lash yo'q</p>
        <p class="card-price">$${array[i].price}</p>
        </div>
      </div>
      `;

    parent.appendChild(newCard);
  }
}
renderFn(products, elCards);
