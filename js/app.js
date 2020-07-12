/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navContainer = document.querySelector('#navbar__list');
const navItem = document.createElement('li');
let docSection = Array.from(document.querySelectorAll('section'));
let sectionHead = Array.from(document.querySelectorAll('h2')); 
let addition = 150;
let gotoTop = document.querySelector('#top');
/**
 * End Global Variables
 * Begin Main Functions
 * 
*/
// dynamically build the navigation based on the amount of section
for (let i = 0; i < docSection.length; i++){
    for (let i = 0; i < sectionHead.length; i++){
    }
    let sectionHeadInner = sectionHead[i].textContent;
    const navLink = document.createElement('a');
    navLink.textContent = sectionHeadInner;
    navLink.setAttribute("href", `#section${[i+1]}`); 
    navLink.classList.add('menu__link');
    navItem.appendChild(navLink);
}
navContainer.appendChild(navItem)

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () => {
  let navigationLinks = document.querySelectorAll('.menu__link');
  let fromTop = window.scrollY + addition;

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
      section.classList.add('your-active-class');
    } else {
      link.classList.remove('active');
      section.classList.remove('your-active-class');

    }
  });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/
// this shows the navbar based on the scroll position
document.addEventListener('DOMContentLoaded', function (){
  let navDisplay = document.querySelector('.navbar__menu');
  navDisplay.style.display = 'none';
  window.addEventListener('scroll', function(){
      if(window.pageYOffset>0){
          navDisplay.style.display = 'block';
      } else {
          navDisplay.style.display = 'none';

      }
  });
});

// A goto top button is shown When the user scrolls 800px from the top of the page
window.onscroll = () => scrollFunction();
scrollFunction = () => {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    gotoTop.style.display = 'block';
  } else {
    gotoTop.style.display ='none';
  }
};
// The user goes to the top of the page when the button is clicked
topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
gotoTop.addEventListener('click', topFunction);