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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let isInViewport = function(el) {
    const bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let sections = document.getElementsByTagName('section');
const navList = document.getElementById("navbar__list");
for (section of sections) {
    let menuId = section.getAttribute("id");  
    let menuName = section.getAttribute("data-nav");
    navList.innerHTML = navList.innerHTML + "<li><a href=\"#" +menuId +"\" class = \'menu__link\'>" + menuName + "</a></li>";
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


