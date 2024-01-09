const API_KEY = "554e3c56cfb28bccd863b1120534404e";

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  let crd = pos.coords;
  let lat = crd.latitude
  let lon = crd.longitude

  const API_URL_MAIN = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `;
  fetch(API_URL_MAIN)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById("weather").innerHTML = `  
        <div class="cityInfos">
        <img class="icon" src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></img>
        </h1>
        <h1>${data.name}</h1>
        <p>${Math.round(data.main.temp)}°</p>
        </div>`;
    });

}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


