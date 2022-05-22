
let navButton = document.querySelector('.nav-button');
let nav = document.querySelector('nav');
let contactItem = document.getElementsByClassName('contact-item');
let contactIcon = document.getElementsByClassName('contact-icon');

navButton.addEventListener('click', toggleNav)
function toggleNav(){
    navButton.classList.toggle('nav-button-clicked');
    nav.classList.toggle('nav-active');
}

contactItem.addEventListener('mouseover', contactHover);
function contactHover(){
    contactIcon.style.fill = 'white';
}
