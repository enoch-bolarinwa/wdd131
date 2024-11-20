// Dynamically set the copyright year
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Dynamically set the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = "Last Updated: " + document.lastModified;
