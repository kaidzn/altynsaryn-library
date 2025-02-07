// Open Popup
function openPopup(imageSrc) {
    var popup = document.getElementById('popup');
    var popupImg = document.getElementById('popup-img');
    popup.style.display = 'flex'; // Show the popup
    popupImg.src = imageSrc; // Set the image source to the clicked image
}

// Close Popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the popup
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
