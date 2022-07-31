import generateHome from './generateHome';
import generateMenu from './generateMenu';
import generateContact from './generateContact';


//initial page load
generateHome();

//clear page contents when changing tabs before loading new content
function clearContent(){
    content.innerHTML = '';
}

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener('click', () => {
    clearContent();
    generateHome();
})

menuBtn.addEventListener('click', () => {
    clearContent();
    generateMenu();
})

contactBtn.addEventListener('click', () => {
    clearContent();
    generateContact();
})
