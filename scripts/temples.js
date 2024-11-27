// Dynamically set the copyright year
const currentYearSpan = document.getElementById('currentYear'); // Target the span for the copyright year
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Set the year dynamically

// Dynamically set the last modified date
const lastModifiedParagraph = document.getElementById('lastModified'); // Target the paragraph for last modified
const lastModifiedDate = document.lastModified; // Get the document's last modified date
lastModifiedParagraph.textContent = `Last Updated: ${lastModifiedDate}`; // Set the last modified text
// Select the hamburger button and the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Add an event listener to toggle the navigation menu
hamburger.addEventListener('click', () => {
    // Toggle the visibility of the nav menu
    navMenu.classList.toggle('open');

    // Change the hamburger icon to an 'X' when the menu is open
    if (navMenu.classList.contains('open')) {
        hamburger.innerHTML = 'X'; // Show 'X' to close
    } else {
        hamburger.innerHTML = '&#9776;'; // Show hamburger icon
    }
});
