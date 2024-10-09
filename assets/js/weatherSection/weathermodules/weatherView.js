export function weatherView(data) {
    const section = document.getElementById('vejr-info');
    const div = document.createElement('div');
    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const temp = document.createElement('p');
    let tempText = Math.round(data.main.temp);
    
    temp.textContent = `${tempText}°C`;

    section.appendChild(div);
    div.appendChild(icon);
    div.appendChild(temp);

}