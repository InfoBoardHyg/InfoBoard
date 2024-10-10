// Function to display the current time
export default function timeView() {
  const tidContainer = document.getElementById("tid-container");
  const currentTime = new Date().toLocaleTimeString('da-DK');
  const time = currentTime.split(".");
  
  const timeHour = document.createElement('p')
  timeHour.textContent = time[0];
  const timeMinute = document.createElement('p')
  timeMinute.textContent = time[1]; 

  tidContainer.innerHTML = "";
  
  tidContainer.appendChild(timeHour);
  tidContainer.appendChild(timeMinute);
}


