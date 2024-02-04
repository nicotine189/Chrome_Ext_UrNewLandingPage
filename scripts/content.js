const apiKey = "*** Your API key (Unsplash) ***";
const images = document.getElementById("image");

let imageUrls = localStorage.getItem("imageUrls");

if (imageUrls) {
  images.src = imageUrls;
} else {
  fetch(
    `https://api.unsplash.com/photos/random?query=landscape&content_type=photo&count=1&dpr=10&q=100&client_id=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      images.src = data[0].urls.regular;
      localStorage.setItem("imageUrls", data[0].urls.regular);
    });
}
