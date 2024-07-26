const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.getElementById('carousel');



for (i = 0; i < images.length; i++) {
    if (i == 0) {
        carousel.innerHTML += `
        <img src="${images[i].image}" class="active not-active">
        <p class="img-title active">${images[i].title}</p>
        <p class="img-info active">${images[i].text}</p>
        `;
    }
    else {
        carousel.innerHTML += `<img src="${images[i].image}" class="not-active">
        <p class="img-title not-active">${images[i].title}</p>
        <p class="img-info not-active">${images[i].text}</p>`;
    }    
  
}
let currentImg = 0;
const nextImage = document.getElementById('next');
nextImage.addEventListener('click', function () {
        if (currentImg < images.length) {
          const carouselImages = document.querySelectorAll('.carousel-container > img');
          const carouselP = document.querySelectorAll('.carousel-container > p');
          carouselImages[currentImg].classList.remove('active');
            carouselP[currentImg].classList.remove('activep');
           currentImg++;
          carouselImages[currentImg].classList.add('active');
          carouselP[currentImg].classList.add('activep');
          
        }
        
    }
);

const prevImage = document.getElementById('prev');
prevImage.addEventListener('click', function () {
        if (currentImg > 0) {
          const carouselImages = document.querySelectorAll('.carousel-container > img');//seleziona tutte le immagini del carousel
          carouselImages[currentImg].classList.remove('active'); //rimozione classe active dell'elemento attuale
           currentImg--;
          carouselImages[currentImg].classList.add('active'); //aggiunta classe active
          
        }
        
    }
);



/* nextImage.addEventListener('click', function () {
        if (currentImage < images.length) {
            document.querySelector('.my-container > .carousel-container > img:nth-chiuld('+ currentImage +')').classList.remove('active');
            document.querySelector('.my-container > .carousel-container > img:nth-chiuld('+ currentImage +')').classList.add('not-active');
            currentImage++;
            document.querySelector('.my-container > .carousel-container > img:nth-chiuld('+ currentImage +')').classList.remove('not-active');
            document.querySelector('.my-container > .carousel-container > img:nth-chiuld('+ currentImage +')').classList.add('active');
        }
    }
      
 */