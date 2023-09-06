export function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const templateProduct = getElement("#template-product");

export function renderFn(array, parent, isAdmin) {
  parent.innerHTML = null;
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const newTemplate = templateProduct.content.cloneNode(true);
    const img = getElement(".card-img-top", newTemplate);
    const title = getElement(".card-title", newTemplate);
    const create = getElement(".card-createAt", newTemplate);
    const count = getElement(".card-count", newTemplate);
    const price = getElement(".card-price", newTemplate);
    const likePath1 = getElement(".like-path1", newTemplate);
    const likePath2 = newTemplate.querySelector(".like-path2");
    const elLink = getElement("#link", newTemplate);

    if (elLink) {
      elLink.href = `http://127.0.0.1:5502/html/single.html?id=${element.id}`;
    }

    if (isAdmin) {
      const dBtn = getElement("#delete-btn", newTemplate);
      dBtn.dataset.id = element.id;

      const eBtn = getElement("#edit-btn", newTemplate);
      eBtn.dataset.id = element.id;
    }

    img.src = element.image;
    title.textContent = element.title;
    create.textContent = element.createdAt;
    price.textContent = element.price;

    fragment.appendChild(newTemplate);
  });
  parent.appendChild(fragment);
}
