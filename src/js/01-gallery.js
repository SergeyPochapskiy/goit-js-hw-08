import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryCardMarkup = galleryItems
.map(({preview,original,description}) => 
`<li class = "gallery__item">
<a class = "gallery__item" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  alt = "${description}"/>
</a></li>`).join("");

galleryRef.insertAdjacentHTML('afterbegin', galleryCardMarkup);

new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);