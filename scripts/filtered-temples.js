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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
      },
      {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
      },
      {
        templeName: "Birmingham Alabama USA",
        location: "Alabama, USA",
        dedicated: "2000, September, 3",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-21774-main.jpg"
      },
  ]
  function createTempleCards() {
    const container = document.getElementById("temples-container");

    temples.forEach(temple => {
        // Create card elements
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const image = document.createElement("img");
        image.src = temple.image;
        image.alt = temple.name;
        image.loading = "lazy"; // Native lazy loading

        const name = document.createElement("h2");
        name.textContent = temple.name;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Total Area: ${temple.area}`;

       
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        
        container.appendChild(card);
    });
}