
// Get the current year
const currentYear = new Date().getFullYear();

// Get the date the document was last modified
const lastModifiedDate = document.lastModified;

// Output the current year in the first paragraph of the footer
document.getElementById('current-year').innerHTML = `© ${currentYear} - `;

// Output the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

