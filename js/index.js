/**Final javascript assignmet **/


const photoElement = document.getElementById('gallery');
const flickrButton = document.getElementById('start-flickr')
console.log(flickrButton);

// Cration of the html element and display the photos
function displayPhotos(photo){
    
    let farm = photo.farm;
    let server = photo.server;
    let id = photo.id;
    let secret = photo.secret;
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	
    let photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`
    photoElement.innerHTML += `<img src=${photoUrl}>`;
    console.log('url',photoUrl);
   
}



// we loop the arry of the photos that we received from the fetching
 function  loopGallery( objectPhots){
     photoElement.innerHTML = '';
    for(let i = 0; i < objectPhots.photos.photo.length; i++){
        displayPhotos(objectPhots.photos.photo[i]);
       console.log('pizza calzone');
    }
}


// assign
async function getGallery(tagsValue,numberPics){
    
    try{
        //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
        
        //const url = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3c3f8e9aca23972524acea0d266fe266&tags=${tagsValue}&format=json&nojsoncallback=1`);
        //const url = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValuez}&per_page=&format=rest`);
        const url = await fetch (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValue}&per_page=${numberPics}&format=json&nojsoncallback=1`);    
        const data = await url.json();
        console.log(data);
        loopGallery(data);
        return(data);
    
    } catch(error){
        console.log('Error', error);
        
        
     }
}
  

flickrButton.addEventListener('click', function() {
    let serchValue = document.querySelector('#serch-fild').value;
    let numberPics = document.querySelector('#number-of-pics').value;
    getGallery(serchValue,numberPics);
});