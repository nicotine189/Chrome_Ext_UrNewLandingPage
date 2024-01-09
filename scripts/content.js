import /scripts/api.env







// Fonctionnalité météo

// La fonction geocoding permet de transformer un nom de ville en coordonnées GPS (latitude et longitude)

function getCityToCoords(city) {
    const API_GEO_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${METEO_API_KEY}`;
    // a- call API
    return (
      fetch(API_GEO_URL)
        // b- PARSE / mettre en forme et trier
        .then((response) => response.json())
        .then((data) => {
          const lat = data[0].lat;
          const lon = data[0].lon;
          return { lat, lon };
        })
    );
  }

// ETAPE 4 : récupérer les données méteo de la ville
function getWeather() {
    let city = document.querySelector("#cityName").value;
    getCityToCoords(city).then((data) => {
      let lat = data.lat;
      let lon = data.lon;
      const API_URL_MAIN = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `;
      fetch(API_URL_MAIN)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(".meteoBox").innerHTML = `
            <div>
            </div>  
            <div class="cityInfos">
            <h1>${data.name}</h1>
            <p>Température: ${data.main.temp}</p>
            <p>Humidité: ${data.main.humidity}</p>
            <p>Pluie: ${data.rain["1h"]}</p>
            </div>`;
        });
    });
}