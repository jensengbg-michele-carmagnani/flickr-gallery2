
/**Final javascript assignmet **/

import { lightBox2 } from "./module/lightBox.js";

// Get the gallery container so you can add the images to it
const searchResultsContainer = document.getElementById('gallery');
const searchButton = document.getElementById('search-button')

// Cration of the html element and display the photos
function displayPhotos(photo){

// Pick out the variablues through deconstruct
    const { farm, server, id, secret } = photo;
    
  
//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	
    let photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`;

    searchResultsContainer.innerHTML += `<img src=${photoUrl}>`;
    //console.log(searchResultsContainer);
}

//  looping  the arry of the photos that we received from the fetching
 function  loopGallery( objectPhots){
    searchResultsContainer.innerHTML = '';
    for(let i = 0; i < objectPhots.photos.photo.length; i++){
        displayPhotos(objectPhots.photos.photo[i]);
      
    }
}

// Init the lightbox
function initLightbox() {
    lightBox2();
}

// assign
async function getGallery(tagsValue,numberPics){
    
    // I'd like set  "search results are loading "Loading images..", when the search result is done remove it" 

    try{
        //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
        const url = await fetch (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValue}&per_page=${numberPics}&format=json&nojsoncallback=1`);    
        const data = await url.json();
        console.log(data);
        loopGallery(data);


        // Init the lightbox code after the images has been fetched
        initLightbox();

        // I'd like to set "the search results isnt loading anymore"
       
        return(data);
    
    } catch(error){
        alert('Unfortunatly occured an error please reload the page', error);
        
        
     }
}
  let cleanField = () =>{
      document.getElementById('search-field').value = '';
      document.getElementById('number-of-pics').value = '';
  }

searchButton.addEventListener('click', function() {

    let searchValue = document.querySelector('#search-field').value;
    let numberPics = document.querySelector('#number-of-pics').value;
    getGallery(searchValue,numberPics);
    cleanField();
    
});