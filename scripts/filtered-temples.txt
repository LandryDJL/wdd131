// Get the current year
const currentYear = new Date().getFullYear();

// Get the date the document was last modified
const lastModifiedDate = document.lastModified;

// Output the current year in the first paragraph of the footer
document.getElementById('current-year').innerHTML = `© ${currentYear} - `;

// Output the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

// Store the selected elements that we are going to use. 
const navigationMenu = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function
// that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
    hambutton.classList.toggle('show');
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
    // Add more temple objects here...
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44175,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-evening-1905504.jpg"
    },
    {
      templeName: "Campinas Brazil",
      location: "Campinas, Brazil",
      dedicated: "2002, May, 17",
      area: 48100,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-morning-1029896-wallpaper.jpg"
    },
  ];



function createTempleCard(filteredTemples){
    document.querySelector("#temple-container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        img.style.width = "250px";
        img.style.height ="auto";
        img.style.boxShadow = "0 0 15px black";
        img.style.marginTop = "20px";
        img.style.marginBottom = "20px";
        img.style.border = "1px solid white";
        card.style.backgroundColor = "lightgray";
        card.style.margin = "10px";
        card.style.padding = "10px";
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector("#temple-container").appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const oldTemplesLink = document.querySelector("#oldTemples");
    const newTemplesLink = document.querySelector("#newTemples");
    const largeTemplesLink = document.querySelector("#largeTemples");
    const smallTemplesLink = document.querySelector("#smallTemples");
    const initialDisplay = document.querySelector(".allTemples");

    initialDisplay.addEventListener("click", () => {
        createTempleCard(temples);
    });

    oldTemplesLink.addEventListener("click", () => {
        createTempleCard(temples.filter(temple => (parseInt(temple.dedicated.split(',')[0], 10) < 1990)));
    });

    newTemplesLink.addEventListener("click", () => {
        createTempleCard(temples.filter(temple => (parseInt(temple.dedicated.split(',')[0], 10) > 2000)));
    });

    smallTemplesLink.addEventListener("click", () => {
        createTempleCard(temples.filter(temple => (parseInt(temple.area) < 10000)));
    });

    largeTemplesLink.addEventListener("click", () => {
        createTempleCard(temples.filter(temple => (parseInt(temple.area) > 90000)));
    });
});

createTempleCard(temples);