import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const mainGallery = document.querySelector(".gallery");

const makeGalleryItem = ({
  preview,
  original,
  description,
}) => `<div class="gallery"><a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;
const makeGalleryItems = galleryItems.map(makeGalleryItem).join("");
mainGallery.insertAdjacentHTML("beforeend", makeGalleryItems);

mainGallery.addEventListener("click", function (event) {
  event.preventDefault();
});
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
