// Dynamically set the copyright year
const currentYearSpan = document.getElementById('currentYear'); // Target the span for the copyright year
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Set the year dynamically

// Dynamically set the last modified date
const lastModifiedParagraph = document.getElementById('lastModified'); // Target the paragraph for last modified
const lastModifiedDate = document.lastModified; // Get the document's last modified date
lastModifiedParagraph.textContent = `Last Updated: ${lastModifiedDate}`; // Set the last modified text
