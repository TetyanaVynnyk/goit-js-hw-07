import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const mainGallery = document.querySelector(".gallery");

const makeGalleryItem = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item"> <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a></div>`;
const makeGalleryItems = galleryItems.map(makeGalleryItem).join("");
mainGallery.insertAdjacentHTML("beforeend", makeGalleryItems);

mainGallery.addEventListener("click", function (event) {
  event.preventDefault();
});

const createModalWindow = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  mainGallery.instance = basicLightbox.create(
    `
    <img src= "${event.target.dataset.source}" />
`,
    {
      onShow: () =>
        mainGallery.addEventListener("keydown", closeModalWindowByEsc),
      onClose: () => {
        mainGallery.removeEventListener("keydown", closeModalWindowByEsc);
      },
    }
  );
  mainGallery.instance.show();
};

const closeModalWindowByEsc = (event) => {
  event.preventDefault();
  const escape = "Escape";
  if (event.code === escape && mainGallery.instance.visible()) {
    mainGallery.instance.close();
  }
};

mainGallery.addEventListener("click", createModalWindow);
