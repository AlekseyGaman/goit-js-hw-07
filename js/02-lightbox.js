import { galleryItems } from "./gallery-items.js";
// Change code below this line

let items = galleryItems;
const gallery = document.querySelector(".gallery");
const render = items
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", render);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionSelector: "img",
  captionDelay: 250,
});
