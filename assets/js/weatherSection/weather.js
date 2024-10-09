import { fetchWeather } from './weathermodules/weatherfetch.js';
import { getCurrentDate } from './weathermodules/getCurrentDate.js';
export default function weathersetup() {
    fetchWeather();
    getCurrentDate()
    
}