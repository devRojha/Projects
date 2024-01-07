const images1 = [
    'image/tcf2.jpg',
    'image/tcf1.jpg',
    'image/tcf3.jpg',
    'image/tcf4.jpg',
    'image/THE-NEXT-HOKAGE.jpg',
    'image/CHAKRAVYUH.jpg'
    // Add more image URLs as needed
];

const images4 = [
    'image/bad4.jpeg',
    'image/bad1.jpeg',
    'image/bad2.jpeg',
    'image/bad3.jpeg',
    'image/bad5.jpeg',
    'image/bad6.jpeg',
    
    // Add more image URLs as needed
];

const images2 = [
    'image/icse1.jpeg',
    'image/icse8.jpeg',
    'image/icse4.jpeg',
    'image/icse2.jpeg',
    'image/icse3.jpeg',
    'image/icse6.jpeg',
    'image/icse7.jpeg',
    'image/ICSE.jpg'
    // Add more image URLs as needed
];

function createImageCarousel(images, containerSelector) {
    const imageContainer = document.querySelector(containerSelector);

    images.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1}`;
        img.classList.add('image');
        img.style.borderRadius = '30px';
        imageContainer.appendChild(img);
    });

    let currentIndex = 0;

    function showNextImage() {
        const images = document.querySelectorAll(`${containerSelector} .image`);
        images.forEach(img => img.classList.remove('visible'));

        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }

    setInterval(showNextImage, 3000);
}

// Create image carousel for the first container
createImageCarousel(images1, '.data1');

// Create image carousel for the second container
createImageCarousel(images2, '.data2');
createImageCarousel(images4, '.data4');

var flag = false;
function menucome() {
    const menuvis = document.getElementsByClassName("menu")[0];
    if (menuvis) {
        if(flag == false){
            menuvis.style.right = '0px';
            flag = true;
        }
        else{
            menuvis.style.right = '-500px';
            flag = false;
        }
    } else {
        console.error('Element with class "menu" not found.');
    }
}
