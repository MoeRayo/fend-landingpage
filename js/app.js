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
// let navArray = ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'];
let navContainer = document.querySelector('#navbar__list');
const navItem = document.createElement('li');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
document.addEventListener('DOMContentLoaded', function navi(evt){
    // console.log('A paragraph was clicked: ' + evt.target.textContent);

});



// myCustomDiv.addEventListener('click', respondToTheClick);
 


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
let docSection = Array.from(document.querySelectorAll('section'));

let sectionHead = Array.from(document.querySelectorAll('h2')); 
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

// build the nav
// Add class 'active' to section when near top of viewport

// simple function to use for callback in the intersection observer

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

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
    
//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('.menu__link');
  let addition = 150;
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

// 