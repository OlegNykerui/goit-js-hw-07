import { galleryItems } from "./gallery-items.js";
// Change code below this line

let refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.addEventListener("click", onImageClick);

refs.gallery.innerHTML = loadGallery();

function loadGallery() {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
  
  <div class="gallery__item">
  <a class="gallery__link"${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  
    `
    )
    .join("");
}

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const markup = `<img class='gallery__image' src = '${event.target.dataset.source}' alt = '${event.target.description}' />`;

  const modal = basicLightbox.create(markup, {
    onShow: () => {
      addEventListener("keydown", onCloseKey);
    },
    onClose: () => {
      removeEventListener("keydown", onCloseKey);
    },
  });

  modal.show();

  function onCloseKey(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
