export function lightBox2(){

    const lightBox = document.createElement('div');
    lightBox.id = 'lightBox';
    document.body.appendChild(lightBox);
   
   
   const images = document.querySelectorAll('img');
   console.log(images);
   images.forEach(image => {
       image.addEventListener('click', e => {
           lightBox.classList.add('active');
           let img = document.createElement('img');
               img.src = image.src.replace('_z.jpg', '_b.jpg');
           while (lightBox.firstChild) {
               lightBox.removeChild(lightBox.firstChild)
           }
           lightBox.appendChild(img);
       })
   })
   
   lightBox.addEventListener('click', e => {
       if(e.target !== e.currentTarget) 
       return
       lightBox.classList.remove('active')
   })
}