

let i = 0;
let time = 1000;
let portfolioImages = [
    {
        imageName: "Logo",
        imageUrl: "img/logo.png"
    },
    {
        imageName: "",
        imageUrl: "img/logo.jpg"
    },
    {
        imageName: "Flyer",
        imageUrl: "img/flyer.png"
    },
    {
        imageName: "",
        imageUrl: "img/flyer.jpg"
    },
    {
        imageName: "Ads",
        imageUrl: "img/ads.png"
    },
    {
        imageName: "",
        imageUrl: "img/ads.jpg"
    }
];

function changeImg(){
    document.slide.src = portfolioImages[i];
    if (i < portfolioImages.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg", time);
}

let division = document.createElement("div");
let img = document.createElement("img");
let imgName = document.createElement("h5");

img.setAttribute("src", portfolioImages.imageUrl);
img.setAttribute("alt", `${portfolioImages.imageName}`);
img.setAttribute("loading", "lazy");

division.appendChild(img);
division.appendChild(imgName);

document.queryselector("#portfolio-slideshow").appendChild(division);

