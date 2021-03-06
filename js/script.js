const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

console.log(images);

/** MILESTONE 1 **/
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

let i = 0;

const imagesWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');
const thumbnailsWrapper = document.querySelector('.carousel-wrapper .thumbnails-container');

for (let i = 0; i < images.length; i++) {

    let activeImage = "";
    let activeText = "";

    if (i === 0) {
        activeImage = 'active';
        activeText = 'active';
    }

    let currentImage = `<div class="position-relative">
                            <img class="${activeImage}" src="${images[i].url}" alt="${images[i].title}">
                            <div class="image-info position-absolute top-50 start-50 translate-middle ${activeText}">
                                <h3>${images[i].title}</h3>
                                <p>${images[i].description}</p>
                            </div>
                        </div>`;

    imagesWrapper.innerHTML += currentImage;
}

// Recupero i bottoni e aggiungo un addEventListener per gestire il cambio di immagine e testo
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const imageElements = document.querySelectorAll('.carousel-image-container img');
const imageInfo = document.querySelectorAll('.carousel-image-container .image-info');

nextButton.addEventListener('click', function () {

    imageElements[i].classList.remove('active');
    imageInfo[i].classList.remove('active');

    i++;

    if (i >= imageElements.length) {
        i = 0;
    }

    imageElements[i].classList.add('active');
    imageInfo[i].classList.add('active');
});

prevButton.addEventListener('click', function () {

    imageElements[i].classList.remove('active');
    imageInfo[i].classList.remove('active');

    i--;

    if (i < 0) {
        i = imageElements.length - 1;
    }

    imageElements[i].classList.add('active');
    imageInfo[i].classList.add('active');
});



