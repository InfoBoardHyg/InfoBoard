export default function busView(bus) {
    // Create bus element
    const busElement = document.createElement('div');
    busElement.classList.add('bus');

    // Create bus name element
    const busNameElement = document.createElement('h3');
    busNameElement.classList.add('bus-name');
    busNameElement.textContent = bus.name;

    // Create bus time element
    const busTimeElement = document.createElement('p');
    busTimeElement.classList.add('bus-time');
    busTimeElement.textContent = bus.time;

    // Create bus stop element
    const busStopElement = document.createElement('p');
    busStopElement.classList.add('bus-stop');
    busStopElement.textContent = bus.stop;

    // Append bus name, time and stop elements to bus element
    busElement.appendChild(busNameElement);
    busElement.appendChild(busStopElement);
    busElement.appendChild(busTimeElement);

    // Append bus element to bus section
    const busSection = document.getElementById('bus-cards');
    busSection.appendChild(busElement);
}