import { weatherView } from './weatherView.js';
export function fetchWeather()  {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric')
        .then(response => {
            return response.json();
        })
        .then(data => {
            weatherView(data);
            
        })
        .catch(error => {
            console.log(error);
        });
}
