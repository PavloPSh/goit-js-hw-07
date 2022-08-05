import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imgGallery = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgGallery);
galleryContainer.addEventListener('click', onGalleryElementClick)




// render function
function createImgGallery (items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div> `;
      })
      .join(''); 
      
};

// addEventListener function
function onGalleryElementClick (event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
      };

    const imgUrl = event.target.dataset.source;
    
    const imgModal = basicLightbox.create(`
    <img src="${imgUrl}">
    `, { onShow: (imgModal) => {
            
        document.addEventListener('keydown', event=> {
            if(event.code === "Escape"){
                imgModal.close()
                }
            });
        }
    });

    imgModal.show();
   
};





