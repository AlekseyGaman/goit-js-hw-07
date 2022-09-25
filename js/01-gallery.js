import { galleryItems } from "./gallery-items.js";
// Change code below this line

let items = galleryItems;
const gallery = document.querySelector(".gallery");
const render = items
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", render);

const itemClick = (evt) => {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) return;

  const target = evt.target.dataset.source;
  console.log("view:", target);

  const instance = basicLightbox.create(`
  <img src="${target}" width="800" height="600">
`);
  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
};

gallery.addEventListener("click", itemClick);
