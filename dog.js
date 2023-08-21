/*
Author: ally8
JavaScript for the Dog Website
*/

//variables
const breedListUrl= "https://dog.ceo/api/breeds/list/all";
const randomDogUrl= "https://dog.ceo/api/breeds/image/random";
const breedList= document.getElementById("breed-list");
const breedButton = document.getElementById("breedButton");
const randomDogButton = document.getElementById("randomDog");
const catButton= document.getElementById("catButton");
const catApiKey = "live_71SkqdHISyKhFt5RDBtU38NM5saPPv6KlrCmcTvJodvslCyqBDVa2NQ2oXrM9H61";

//when the page loads
window.addEventListener("load", updateBreedList);

//retrieve the list of breed fromthe API

async function getBreedList(){
    return fetch(breedListUrl).then(response => response.json());

}


//add breed to drop down list
function updateBreedList(){
    getBreedList().then(function(data){
        //get breed name
        for (element in data.message){
            //append breed name to the select list
            let option = createOption(element);
            breedList.appendChild(option);
         }
        }
    );
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
  }


  //when button is clicked
randomDogButton.addEventListener("click", getRandomImage);

//retrieve image of random dog

async function getRandomImage(){ 
    fetch(randomDogUrl)
    .then(response => response.json())
    .then(data => { const dogUrl = data.message;
    // Target the <img> element and set its src attribute to the image URL
            const imageElement1 = document.getElementById("randomImage");
            imageElement1.src = dogUrl;
            });
        }

//when you click on the go button show dog image 
    
    

    breedList.addEventListener("change", getBreedImage);
    breedButton.addEventListener("click", getBreedImage);

    function getBreedImage(){
//get list text to populate url
  let selectedBreed = breedList.options[breedList.selectedIndex].text;
  //build url
  let url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
  //fetch call
  fetch(url)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.message;
       // Target the <img> element and set its src attribute to the image URL
        const imgElement = document.getElementById('image');
        imgElement.src = imageUrl;
        showButton()
        function showButton() {
            breedButton.style.display = 'inline-block';
        }})  
        .catch(error => {
            console.error('Error fetching image:', error);
        });}

 //when you click on the cat button, show a random cat picture
 catButton.addEventListener("click", getRandomCat);

 function getRandomCat(){
    fetch('https://api.thecatapi.com/v1/images/search/',{ headers: {
        'x-api-key': catApiKey }})
        .then (response => response.json())
        .then ((result) => {
            //items = result;
        const catImage= document.getElementById("catImage");   
            catImage.src = result[0].url;
        }),
        (error) => {
            console.log(error);
}}
