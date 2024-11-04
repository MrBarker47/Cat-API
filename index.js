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
let option = document.createElement("option"); 

// Task 1
async function initialLoad() {
     fetch(urlInfo)
     .then(res => res.json())
     .then(res => res.results)
     .catch(err => console.log(err))
}


//Task 2 
    breedSelect.addEventListener("click", (e) => {

    })

export async function favourite(imgId) {

}



console.log("Hello World");