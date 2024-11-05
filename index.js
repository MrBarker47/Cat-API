import * as Carousel from "./Carousel.js";
import axios from "axios";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");
const API_KEY = "live_bFv5MyGycT3bjaonYRTZKVDl6mPjqu06UpKF26QsQRxC3gKyPuw3QHaSC5cVbUaC";
let urlInfo = "https://api.thecatapi.com/v1/images/search?limit=10";


// Task 1
async function initialLoad() {
     fetch(urlInfo)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(err => console.log(err))
     let option = document.createElement("option"); 
     option.textContent = ""
     breedSelect.appendChild(option);
    

}

initialLoad()

//Task 2 
    breedSelect.addEventListener("click", (e) => {
     fetch(urlInfo)
     .then(response => response.json())
     .then(response => console.log(response))
     .catch(err => console.log(err))
    })
    let carousel = document.getElementById("carouselItemTemplate");
    breedSelect.append(carousel);

    let item = document.getElementsByClassName("carousel-item");
    breedSelect.append(item);

    let img = document.querySelector("img");
    breedSelect.append(img);

export async function favourite(imgId) {

}



