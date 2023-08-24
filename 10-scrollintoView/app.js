const navBar = document.getElementById('nav');
const footerDate = document.getElementById('date');
const scrollBtn = document.querySelector('.top-link');
const mobileBurgerIcon = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

window.addEventListener('scroll', () => {
    // my attempt before researching how this scroll navbar feature is achieved.
    // it caused a jittering effect every time the window scroll event was triggered regardless of whether the magnitude of scroll exceeded the height of the navbar.
    // let navBarHeight = navBar.getBoundingClientRect();
    // let navBarHeightVert = Math.abs(navBarHeight.y);
    // console.table(navBarHeightVert, navBar.offsetHeight);
    // if (navBarHeightVert > navBar.offsetHeight) {
    // navBar.classList.add('fixed-nav');
    // } else {
    //     navBar.classList.remove('fixed-nav');
    // }
    // attempt after googling
     if (window.scrollY > navBar.offsetHeight) {
 navBar.classList.add('fixed-nav');
 scrollBtn.classList.add('show-link');
 } else {
 navBar.classList.remove('fixed-nav');
 scrollBtn.classList.remove('show-link');
 }
});

window.addEventListener('load', () => {
    const currentYr = new Date().getFullYear();
    footerDate.textContent = currentYr;
});

mobileBurgerIcon.addEventListener('click', () => {
    linksContainer.classList.toggle('links-container');
});