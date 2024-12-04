// Footer: Display the current year and last modified date
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

footer.innerHTML = `
  &copy; ${currentYear} UAE Information | Last Modified: ${lastModified}
`;

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
