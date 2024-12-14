document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        { name: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", size: 11500, imageUrl: "https://example.com/aba-nigeria.jpg" },
        { name: "Manti Utah", location: "Manti, Utah", dedicated: "1888, May, 21", size: 74700, imageUrl: "https://example.com/manti-utah.jpg" },
        { name: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", size: 96630, imageUrl: "https://example.com/payson-utah.jpg" },
        { name: "Yigo Guam", location: "Yigo, Guam", dedicated: "2021, May, 30", size: 6865, imageUrl: "https://example.com/yigo-guam.jpg" },
    ];

    const container = document.getElementById("templeContainer");
    const menu = document.getElementById("menu");

    function displayTemples(filteredTemples) {
        container.innerHTML = "";
        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.className = "temple-card";
            card.innerHTML = `
                <h3>${temple.name}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.size} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy" />
            `;
            container.appendChild(card);
        });
    }

    menu.addEventListener("click", (event) => {
        const filter = event.target.dataset.filter;
        let filteredTemples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.size > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.size < 10000);
                break;
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    });

    displayTemples(temples); // Display all temples by default
});
