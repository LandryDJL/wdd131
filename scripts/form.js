
// Get the current year
const currentYear = new Date().getFullYear();

// Get the date the document was last modified
const lastModifiedDate = document.lastModified;

// Output the current year in the first paragraph of the footer
document.getElementById('current-year').innerHTML = `© ${currentYear} - `;

// Output the last modified date in the second paragraph of the footer
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

const products = [
  {
    id: "fc-1888",
    productName: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    productName: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    productName: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    productName: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    productName: "warp equalizer",
    averageRating: 5.0
  }
];

function createProduct(products){
  const productSelect = document.querySelector('#product-selection');
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.productName;
    productSelect.appendChild(option);
}); 
}

createProduct(products);


document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  if (page === "form") {
    const form = document.querySelector("#product-review-form");

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
        numReviews++;
        localStorage.setItem("numReviews-ls", numReviews);

        // Redirect to review.html
        window.location.href = "review.html";
      });
    }
  } else if (page === "review-page") {
    const reviewCounter = document.querySelector("#reviewCounter");
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    function updateCounter() {
      reviewCounter.textContent = "";

      if (numReviews !== 0) {
        reviewCounter.textContent = `Reviews completed: ${numReviews}`;
      } else {
        reviewCounter.textContent = "This is your first review";
      }
    }

    // Initialize the counter on page load
    updateCounter();
  }
});




// const reviewCounter = document.querySelector("#reviewCounter");

// let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

// function updateCounter(){
//   reviewCounter.textContent = "";

//   if (numReviews !== 0) {
//     reviewCounter.textContent = `Reviews completed: ${numReviews}`;
//   } else {
//     reviewCounter.textContent = "This is your first review";
//   }
// };

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("#product-review-form");

//   if (form) {
//     form.addEventListener("submit", () => {
//       numReviews++;
//       localStorage.setItem("numReviews-ls", numReviews);
//       updateCounter();
//       console.log("working!")
//     });
//   }else{
//     console.log("working!")

//   }
  
// });


// function updateCounter(){
  
//   const reviewCounter = document.querySelector("#reviewCounter");
  
//   let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

//   if (reviewCounter){
//     reviewCounter.textContent = "";
//   }else{
//     alert("not found")
//   }

//   if (numReviews !== 0) {
//     reviewCounter.textContent = `Reviews completed: ${numReviews}`;
//   } else {
//     reviewCounter.textContent = "This is your first review";
//   }
  
//   numReviews++;
//   localStorage.setItem("numReviews-ls", numReviews);
// };

// document.querySelector("#product-review-form").addEventListener("submit", () =>{
//   updateCounter();
// });




// // Manage review counter using localStorage
// const reviewCounter = document.getElementById('reviewCounter');

// function updateCounter() {
//   const count = Number(localStorage.getItem('reviewCount')) || 0;
//   // count = parseInt(count, 10) + 1;
//   localStorage.setItem('reviewCount', count);
//   reviewCounter.innerHTML = `Reviews completed: ${count}`;
// }

// document.getElementById('product-review-form').addEventListener('submit', () => {
//   // event.preventDefault();
//   updateCounter();
// });

// // Display the current count on review.html
// document.addEventListener('DOMContentLoaded', () => {
//   const count = localStorage.getItem('reviewCount') || 0;
//   reviewCounter.textContent = `Reviews completed: ${count}`;
// });



