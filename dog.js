/*
Author: ally8
JavaScript for the Dog Website
*/

//variables
const breedListUrl= "https://dog.ceo/api/breeds/list/all";
const breedList= document.getElementById("breed-list");
const breedImageUrl = "https://dog.ceo/api/breeds/${breed}/images/random;" //returns a random image of a breed
//when the page loads
window.addEventListener("load", updateBreedList);

//retrieve the list of breed fromthe API
function getBreedList(){
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

