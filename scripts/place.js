// Footer: Display the current year and last modified date


// Dynamically set the copyright year
const currentYearSpan = document.getElementById('currentYear'); // Target the span for the copyright year
const currentYear = new Date().getFullYear(); // Get the current year
currentYearSpan.textContent = currentYear; // Set the year dynamically

// Dynamically set the last modified date
const lastModifiedParagraph = document.getElementById('lastModified'); // Target the paragraph for last modified
const lastModifiedDate = document.lastModified; // Get the document's last modified date
lastModifiedParagraph.textContent = `Last Updated: ${lastModifiedDate}`; // Set the last modified text

// Static values for temperature and wind speed
const temperature = 35; // °C
const windSpeed = 10; // km/h

// Function to calculate wind chill factor
function calculateWindChill(temp, speed) {
  // Formula: Wind Chill Factor (in °C)
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1); // Rounded to one decimal place
}

// Function to check conditions and calculate wind chill
function displayWindChill(temp, speed) {
  const windChillElement = document.querySelector(".weather ul");
  let windChill;

  // Conditions for wind chill calculation
  if (temp <= 10 && speed > 4.8) {
    windChill = calculateWindChill(temp, speed) + " °C";
  } else {
    windChill = "N/A";
  }

  // Add wind chill result to the Weather section
  windChillElement.innerHTML += `<li><strong>Wind Chill:</strong> ${windChill}</li>`;
}

// Call the function on page load
displayWindChill(temperature, windSpeed);
