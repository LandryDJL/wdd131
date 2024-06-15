


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

