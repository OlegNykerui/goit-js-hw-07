import { galleryItems } from "./gallery-items.js";
// Change code below this line

let refs = {
  gallery: document.querySelector(".gallery"),
};

// refs.gallery.addEventListener("click", onImageClick);

refs.gallery.insertAdjacentHTML("beforeend", loadGallery());

function loadGallery() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> 

`
    )
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
  close: false,
  showCounter: false,
});

// let lightbox1111 = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   captionPosition: "bottom",
// });
