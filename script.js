// Define cities
const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'];

// Populate dropdown menu with cities
function populateCities() {
    const citySelect = document.getElementById('citySelect');
    cities.forEach(city => {
        const option = document.createElement('option');
        option.textContent = city;
        option.value = city;
        citySelect.appendChild(option);
    });
}

window.onload = populateCities;

// Fetch weather data
function getWeather() {
    const citySelect = document.getElementById('citySelect');
    const apiKey = '8c66c9be14e277b9cbb3fce88e66bc63';
    const city = citySelect.value; 
    const weatherCard = document.getElementById('weatherCard');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherCard.innerHTML = `<h2>Current Weather in ${city}</h2>
                     <p>Temperature: ${temperature}°C</p>
                     <p>Weather: ${weatherDescription}</p>
                     <img src="${weatherIcon}" alt="Weather Icon">`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherCard.innerHTML = `<p>Sorry! Can't load the weather data right now. Please try again.</p>`;
        });
}
