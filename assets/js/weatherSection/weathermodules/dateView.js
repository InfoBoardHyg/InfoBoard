export function dateView(date) {
    console.log(date);
    const section = document.getElementById('vejr-info');
    const div = document.createElement('div');
    const weekday = document.createElement('p');
    const day = document.createElement('p');
    const month = document.createElement('p');
    weekday.textContent = date.weekday;
    day.textContent = date.day;
    month.textContent = date.month;
    section.appendChild(div);
    div.appendChild(weekday);
    div.appendChild(day);
    div.appendChild(month);
    
    
}