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

let sections = document.getElementsByTagName("section");
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let isInViewport = function(el) {
    const bounding = el.getBoundingClientRect();
    return (
        bounding.top > 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const section of sections) {
    const navLink = section.getAttribute("id");
    navList.innerHTML = navList.innerHTML + "<li id = \"" + navLink + "\"><a class = \"menu__link\">" + navLink + "</a></li>";
};

// Add class 'active' to section when near top of viewport
function activateNavLinks(){
    for (const section of sections) {
        if (isInViewport(section)){
            section.classList.add("your-active-class");
        }
        else {
            section.classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollLink(el){
    for (const section of sections) {
        if (section.getAttribute("id") === el){
            section.scrollIntoView({behavior: "smooth", block: "end"});
        }

    }
    
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
let navLinks = document.querySelectorAll("li")

for (const navLink of navLinks) {
    navLink.addEventListener("click", function(){
        scrollLink(navLink.getAttribute("id"));
    });
}

// Set sections as active
document.addEventListener("scroll", function() {
    activateNavLinks();
});
