
export function kantinefetch() {
    fetch('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then(data => {
            let today = new Date().getDay()
            let menuContainer = document.getElementById('menu')
            menuContainer.innerText = data.Days[today - 1].Dish

        })
        .catch(error => {
            console.error('Error:', error.message);
        })
}