export function weatherView(data, date) {
    const section = document.getElementById('vejr-info');
    section.innerHTML = '';
    

    const weatherDiv = document.createElement('div');
    const weekday = document.createElement('p');
    const day = document.createElement('p');
    const month = document.createElement('p');
    weekday.textContent = date.weekday;
    day.textContent = date.day;
    month.textContent = date.month;
    section.appendChild(weatherDiv);
    weatherDiv.appendChild(weekday);
    weatherDiv.appendChild(day);
    weatherDiv.appendChild(month);

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