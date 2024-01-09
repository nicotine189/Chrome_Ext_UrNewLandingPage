const apiKey = 'x1qlmb8ZLLOvEwCU60HL2oT-MhvjWvFM2bNUpHa8Y6s';
const images = document.getElementById("image")

let imageUrls = localStorage.getItem('imageUrls')



if (imageUrls) {
    images.src = imageUrls;
    

} else {
    fetch(`https://api.unsplash.com/photos/random?query=landscape&content_type=photo&count=1&dpr=10&q=100&client_id=${apiKey}`)
  .then(response => response.json())
  .then(data => {
     images.src = data[0].urls.regular;
     localStorage.setItem('imageUrls', data[0].urls.regular);
     
   
  });
    
}

if (localStorage.length === 0) {

    console.log("c'est vide")
} else {

    console.log(localStorage.length)
}