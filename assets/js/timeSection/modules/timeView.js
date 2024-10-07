// Function to display the current time
export default function timeView() {
  const tidContainer = document.getElementById("tid-container");
  const currentTime = new Date().toLocaleTimeString();
  tidContainer.textContent = currentTime;
}

setInterval(timeView, 1000);
