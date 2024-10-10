export default function busView(bus) {

    const busSection = document.getElementById('bus-cards');
    busSection.innerHTML = '';




    // Create bus element
    const busElement = document.createElement('div');
    busElement.classList.add('bus');
    

    for (let i = 0; i < 5; i++) {
        let currentBus = {
            name: bus.MultiDepartureBoard.Departure[i].name.split(' ')[1],
            time: bus.MultiDepartureBoard.Departure[i].time,
            stop: bus.MultiDepartureBoard.Departure[i].stop.split(' ')[0]
        }

        const busCard = document.createElement('div');
        busCard.classList.add('bus-card');


        // Create bus name element
        const busNameElement = document.createElement('h3');
        busNameElement.classList.add('bus-name');
        busNameElement.textContent = currentBus.name;

        // Create bus time element
        const busTimeElement = document.createElement('p');
        busTimeElement.classList.add('bus-time');
        busTimeElement.textContent = currentBus.time;

        // Create bus stop element
        const busStopElement = document.createElement('p');
        busStopElement.classList.add('bus-stop');
        busStopElement.textContent = currentBus.stop;

        // Append bus name, time and stop elements to bus element
        busCard.appendChild(busNameElement);
        busCard.appendChild(busStopElement);
        busCard.appendChild(busTimeElement);
        
        // Append bus element to bus section
        
        busSection.appendChild(busCard);
    }
}