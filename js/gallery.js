const imageSelected = document.querySelector("#image-selected img");

const gallery = document.querySelectorAll(".gallery-images .gallery-image");

function removeActived(images) {
    images.forEach(image => {
        image.classList.remove("actived");
    });
}

function changeImage(e) {
    removeActived(gallery);

    const imageContainer = e.target.parentNode;
    imageContainer.classList.add("actived");

    imageSelected.src = e.target.src;
}

for (let image of gallery) {

    image.addEventListener("click", changeImage );
}

